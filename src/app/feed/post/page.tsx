"use client"
import React, { useState } from "react"
import Image from "next/image"
import {
  ModalBox,
  Modalcontainerstyle,
  ModalContent,
  ContentContainer,
  Modaltitle,
  UserProfile,
  ProfileImage,
  ProfileImageContainer,
  UtilIconsstyle,
  Buttonsubmit,
  Locationholder,
  Inputbox,
} from "./styles"
import dummyData from "../dummydata/MOCK_DATA.json"
import addressicon from "../post/icons/address.png"
import vectoricon from "../post/icons/vector.png"
import imgposticon from "../post/icons/imgpost.png"
import withicon from "../post/icons/with.png"

interface PostPageProps {
  clickModal: () => void
}

const PostPage: React.FC<PostPageProps> = ({ clickModal }) => {
  const handleXButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    clickModal()
  }

  const [title, setTitle] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const [tag, setTag] = useState<string[]>([])
  const [files, setFiles] = useState<string[]>()
  const [location, setLocation] = useState<string | null>(null)
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files)
      setSelectedImages((prevImages) => [...prevImages, ...newImages])
      const newPreviewImages = newImages.map((image) => URL.createObjectURL(image))
      setPreviewImages((prevImages) => [...prevImages, ...newPreviewImages])
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

  const handlePostButtonClick = () => {
    const formData = {
      title,
      comment,
      tag,
      files,
    }

    const token = localStorage.getItem("authToken")

    if (!token) {
      console.error("AuthToken not found in localStorage")
      return
    }

    console.log(token)

    fetch("http://localhost:8080/feeds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post request successful:", data)
      })
      .catch((error) => {
        console.error("Error during POST request:", error)
      })
  }
  const filteredData = dummyData.filter((data) => data.postId === 1)
  return (
    <ModalBox>
      <Modalcontainerstyle>
        <ModalContent>
          <Modaltitle>
            <div></div>
            <input type="text" name="title" className="w-1/2 text-center" placeholder="제목을 입력해주세요"></input>
            <button onClick={handleXButtonClick}>X</button>
          </Modaltitle>
          {filteredData.map((data) => (
            <UserProfile key={data.postId}>
              <ProfileImageContainer>
                <ProfileImage src={data.userimg} alt="userimg" />
              </ProfileImageContainer>
              <div className="mt-2 p-1">{data.username}</div>
            </UserProfile>
          ))}
          <UtilIconsstyle>
            <Locationholder>{location ? <p>위치: {location}</p> : <p>위치 정보가 없습니다</p>}</Locationholder>
            <Image src={vectoricon} alt="vector icon" />
            <Image src={addressicon} alt="adress Icon" onClick={handleAddressIconClick} />
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageInputChange}
              multiple
            />
            <Image src={imgposticon} alt="Image Post Icon" onClick={handleImagePostIconClick} />
            <Image src={withicon} alt="With Icon" />
          </UtilIconsstyle>
          <ContentContainer>
            <div className="flex flex-row items-center">
              {previewImages.map((image, index) => (
                <img key={index} src={image} alt={`미리보기 ${index + 1}`} className={"w-[450px] h-[450px]  m-3"} />
              ))}
            </div>
          </ContentContainer>
          <Inputbox>
            <input type="text" name="comment" className="w-full h-20" placeholder="내용을 입력해 주세요"></input>
          </Inputbox>
          <Inputbox>
            <input type="text" name="tag" className="w-12 text-center" placeholder="태그"></input>
          </Inputbox>
          <Inputbox>
            <input type="text" name="expenses" className="w-12 text-center" placeholder="경비"></input>
          </Inputbox>
          <Inputbox>
            <input type="text" name="numOfPeople" className="w-12 text-center" placeholder="인원"></input>
          </Inputbox>
          <Buttonsubmit onClick={handlePostButtonClick}>게시</Buttonsubmit>
        </ModalContent>
      </Modalcontainerstyle>
    </ModalBox>
  )
}

export default PostPage
