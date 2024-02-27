"use client"
import React, { useState } from "react"
import Image from "next/image"
import dummyData from "../utils/dummydata/dummydata.js"
import addressicon from "@assets/icons/address.png"
import vectoricon from "@assets/icons/vector.png"
import imgposticon from "@assets/icons/imgpost.png"
import withicon from "@assets/icons/with.png"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import Compressor from "compressorjs"

interface PostPageProps {
  clickModal: () => void
}

const PostPage: React.FC<PostPageProps> = ({ clickModal }) => {
  const handleXButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    clickModal()
  }

  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [tag, setTag] = useState<string[]>([""])
  const [expenses, setExpenses] = useState<number>(0)
  const [numOfPeople, setNumOfPeople] = useState<number>(0)
  const [location, setLocation] = useState<string | null>(null)
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])
  const router = useRouter()
  const handleImageInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files)
      const compressedImages: File[] = []
      for (let i = 0; i < newImages.length; i++) {
        const compressedImage = await compressImage(newImages[i])
        compressedImages.push(compressedImage)
      }
      setSelectedImages((prevImages) => [...prevImages, ...compressedImages])
      const newPreviewImages = compressedImages.map((image) => URL.createObjectURL(image))
      setPreviewImages((prevImages) => [...prevImages, ...newPreviewImages])
      setFiles((prevFiles) => [...prevFiles, ...compressedImages])
    }
  }
  const compressImage = (image: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      new Compressor(image, {
        quality: 0.6,
        maxWidth: 800,
        maxHeight: 600,
        success(result) {
          resolve(result as File)
        },
        error(e) {
          console.error("이미지 압축 중 오류 발생:", e)
          reject(e)
        },
      })
    })
  }
  const getCurrentTime = (): string => {
    const date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
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

  const addTagInput = () => {
    setTag([...tag, ""])
  }
  const handleTagInputSizeChange = (increment: boolean) => {
    const tagInput = document.getElementById("tagInput") as HTMLTextAreaElement
    if (tagInput) {
      const currentRows = tagInput.rows
      const newRows = increment ? currentRows + 1 : Math.max(currentRows - 1, 1)
      tagInput.rows = newRows
    }
  }

  const date = getCurrentTime()

  const handlePostButtonClick = () => {
    const formData = new FormData()
    formData.append("title", title)
    formData.append("content", content)
    formData.append("tag", JSON.stringify(tag))
    formData.append("date", date)
    formData.append("numOfPeople", numOfPeople.toString())
    formData.append("expenses", expenses.toString())
    files.forEach((file) => {
      formData.append("files", file)
    })
    const accessToken = Cookies.get("accessToken")
    if (!accessToken) {
      // console.log('로그인이 필요합니다.');
      // router.push("/login")
    }
    fetch("http://localhost:8080/feeds", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response)
        response.json()
      })
      .then((data) => {
        console.log(data)
        // clickModal()
      })
      .catch((error) => {
        console.error("Error during POST request:", error)
      })
  }

  const filteredData = dummyData.filter((data) => data.postId === 1)
  return (
    <div className="fixed top-0 left-0 w-screen h-full bg-black bg-opacity-40 flex justify-center items-center">
      <div className="flex items-center justify-center w-5/10 bg-white rounded-lg">
        <div className="w-[600px] min-h-full min-w-full flex flex-col">
          <div className="p-6 w-full flex justify-between border-b-2 border-gray-300">
            <div></div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-1/2 text-center"
              placeholder="제목을 입력해주세요"
            />
            <button onClick={handleXButtonClick}>X</button>
          </div>
          {filteredData.map((data) => (
            <div key={data.postId} className="p-3 border-b-2 border-gray-300 flex items-center">
              <div className="p-1 overflow-hidden rounded-full border-2 border-black mr-4">
                <img src={data.userimg} alt="userimg" className="w-full h-full object-cover" />
              </div>
              <div className="mt-2 p-1">{data.username}</div>
            </div>
          ))}
          <div className="p-3 flex justify-end border-b-2 border-gray-300">
            <div className="mr-auto">{location ? <p>위치: {location}</p> : <p>위치 정보가 없습니다</p>}</div>
            <img src={vectoricon.src} alt="vector icon" className="m-1" />
            <img
              src={addressicon.src}
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
            <img
              src={imgposticon.src}
              alt="Image Post Icon"
              className="m-1 cursor-pointer"
              onClick={handleImagePostIconClick}
            />
            <img src={withicon.src} alt="With Icon" className="m-1" />
          </div>
          <div className="p-3 flex justify-center items-center overflow-x-auto">
            <div className="flex flex-row items-center">
              {previewImages.map((image, index) => (
                <img key={index} src={image} alt={`미리보기 ${index + 1}`} className={"w-[450px] h-[450px] m-3"} />
              ))}
            </div>
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <input
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-20"
              placeholder="내용을 입력해 주세요"
            />
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <textarea
              name="tag"
              id="tagInput"
              value={tag.join(",")}
              onChange={(e) => setTag(e.target.value.split(","))}
              className="w-15 h-12 resize-none"
              placeholder="태그"
              rows={1}
            />
            <div className="flex justify-end mt-2">
              <button onClick={() => handleTagInputSizeChange(true)}>+</button>
              <button onClick={() => handleTagInputSizeChange(false)}>-</button>
            </div>
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <input
              type="number"
              name="expenses"
              className="w-12 text-center"
              value={expenses}
              onChange={(e) => setExpenses(parseInt(e.target.value))}
              placeholder="경비"
            />
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <input
              type="number"
              name="numOfPeople"
              className="w-12 text-center"
              value={numOfPeople}
              onChange={(e) => setNumOfPeople(parseInt(e.target.value))}
              placeholder="인원"
            />
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
