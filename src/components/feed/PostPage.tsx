"use client"
import React, { useRef } from "react"
import { useForm } from "react-hook-form"
import Image from "next/image"
import { axiosClientInstance } from "@utils/axios"
import addressicon from "@assets/icons/address.png"
import imgposticon from "@assets/icons/imgpost.png"
import vectoricon from "@assets/icons/vector.png"
import withicon from "@assets/icons/with.png"
import InputWithLabel from "@components/signup/InputLabel"
import { Session } from "next-auth"
import { useSession } from "next-auth/react"

interface FormValues {
  title: string
  comment: string
  tag: string
  location?: string
  images: File[]
  expenses: string
  numOfPeople: string
}

interface PostPageProps {
  onClose?: () => void
}

const PostPage: React.FC<PostPageProps> = ({ onClose }) => {
  const { register, handleSubmit, setValue, watch } = useForm<FormValues>({
    defaultValues: {},
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : []
    setValue("images", files)
  }

  const handleAddressIconClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setValue("location", `위도: ${latitude}, 경도: ${longitude}`)
        },
        (error) => {},
      )
    } else {
    }
  }

  const handleImagePostIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const createFormData = (data: FormValues): FormData => {
    const formData = new FormData()
    formData.append("title", data.title)
    formData.append("comment", data.comment)
    formData.append("tag", data.tag)
    if (data.location) {
      formData.append("location", data.location)
    }
    formData.append("expenses", data.expenses)
    formData.append("numOfPeople", data.numOfPeople)
    data.images.forEach((file, index) => {
      formData.append(`images[${index}]`, file)
    })
    return formData
  }

  const handlePostButtonClick = handleSubmit(async (data) => {
    const formData = createFormData(data)

    try {
      await axiosClientInstance.post("/feeds", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    } catch (error) {}
  })

  const images = watch("images", [])

  return (
    <div className="fixed top-0 left-0 w-screen h-full bg-black bg-opacity-40 flex justify-center items-center">
      <div className="flex items-center justify-center w-5/10 bg-white rounded-lg">
        <div className="w-[600px] min-h-full min-w-full flex flex-col">
          <div className="p-6 w-full flex justify-between border-b-2 border-gray-300">
            <div></div>
            <InputWithLabel label="" register={register} name="title" placeholder="제목을 입력해주세요" error="" />
            <button onClick={onClose}>X</button>
          </div>
          <div className="p-3 flex justify-end border-b-2 border-gray-300">
            <Image src={vectoricon} alt="vector icon" className="m-1" />
            <Image
              src={addressicon}
              alt="address Icon"
              className="m-1 cursor-pointer"
              onClick={handleAddressIconClick}
            />
            <input
              type="file"
              id="imageInput"
              ref={fileInputRef}
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
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`미리보기 ${index + 1}`}
                  width={450}
                  height={450}
                  className={"m-3"}
                />
              ))}
            </div>
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <textarea {...register("comment")} className="w-full h-20" placeholder="내용을 입력해 주세요" />
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <InputWithLabel label="" register={register} name="tag" placeholder="태그" error="" />
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <InputWithLabel label="" register={register} name="expenses" placeholder="경비" error="" />
          </div>
          <div className="p-3 border-t-2 border-gray-300">
            <InputWithLabel label="" register={register} name="numOfPeople" placeholder="인원" error="" />
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
