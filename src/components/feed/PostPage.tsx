"use client"
import addressicon from "@assets/icons/address.png"
import imgposticon from "@assets/icons/imgpost.png"
import vectoricon from "@assets/icons/vector.png"
import withicon from "@assets/icons/with.png"
import { axiosInstance } from "@utils/axios"
import Image from "next/image"
import React, { useState } from "react"
// TODO : react-hook-form 사용하여 form 처리하기
interface PostPageProps {
  clickModal: () => void
}

const PostPage: React.FC = () => {
  const handleXButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    // clickModal()
  }

  const [title, setTitle] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const [tag, setTag] = useState<string[]>([])
  const [files, setFiles] = useState<string[]>()
  const [location, setLocation] = useState<string | null>(null)
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files)
      setSelectedImages((prevImages) => [...prevImages, ...newImages])
    }
  }

  const handleAddressIconClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation(`위도: ${latitude}, 경도: ${longitude}`)
        },
        (error) => {
          console.error("위치 정보를 가져오는 동안 오류 발생:", error.message)
        },
      )
    } else {
      console.error("이 브라우저는 위치 정보를 지원하지 않습니다.")
    }
  }

  const handleImagePostIconClick = () => {
    const fileInput = document.getElementById("imageInput") as HTMLInputElement
    if (fileInput) {
      fileInput.click()
    }
  }

  const handlePostButtonClick = async () => {
    const formData = {
      title,
      comment,
      tag,
      files,
    }

    await axiosInstance("/feeds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // TODO: formData를 서버로 전송하기
      // body: JSON.stringify(formData),
    })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error during POST request:", error)
      })
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-full bg-black bg-opacity-40 flex justify-center items-center">
      <div className="flex items-center justify-center w-5/10 bg-white rounded-lg">
        <div className="w-[600px] min-h-full min-w-full flex flex-col">
          <div className="p-6 w-full flex justify-between border-b-2 border-gray-300">
            <div></div>
            <input type="text" name="title" className="w-1/2 text-center" placeholder="제목을 입력해주세요" />
            <button onClick={handleXButtonClick}>X</button>
          </div>
          {/* {filteredData.map((data) => (
            <div key={data.postId} className="p-3 border-b-2 border-gray-300 flex items-center">
              <div className="p-1 overflow-hidden rounded-full border-2 border-black mr-4">
                <img src={data.userimg} alt="userimg" className="w-full h-full object-cover" />
              </div>
              <div className="mt-2 p-1">{data.username}</div>
            </div>
          ))} */}
          <div className="p-3 flex justify-end border-b-2 border-gray-300">
            <div className="mr-auto">{location ? <p>위치: {location}</p> : <p>위치 정보가 없습니다</p>}</div>
            <Image src={vectoricon} alt="vector icon" className="m-1" />
            <Image
              src={addressicon}
              alt="adress Icon"
              className="m-1 cursor-pointer"
              onClick={handleAddressIconClick}
            />
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageInputChange}
              multiple
            />
            <Image
              src={imgposticon}
              alt="Image Post Icon"
              className="m-1 cursor-pointer"
              onClick={handleImagePostIconClick}
            />
            <Image src={withicon} alt="With Icon" className="m-1" />
          </div>
          <div className="p-3 flex justify-center items-center overflow-x-auto">
            <div className="flex flex-row items-center">
              {previewImages.map((image, index) => (
                <Image key={index} src={image} alt={`미리보기 ${index + 1}`} className={"w-[450px] h-[450px] m-3"} />
              ))}
            </div>
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <input type="text" name="comment" className="w-full h-20" placeholder="내용을 입력해 주세요" />
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <input type="text" name="tag" className="w-12 text-center" placeholder="태그" />
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <input type="text" name="expenses" className="w-12 text-center" placeholder="경비" />
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <input type="text" name="numOfPeople" className="w-12 text-center" placeholder="인원" />
          </div>
          <div className="p-3">
            <button
              onClick={handlePostButtonClick}
              className="w-full h-12 bg-yellow-500 text-white font-bold rounded-md"
            >
              게시
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage
