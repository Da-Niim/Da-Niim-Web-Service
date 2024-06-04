"use client"
import React from "react"
import { useRouter } from "next/navigation"
import PostPage from "@components/feed/postPage"

const Post: React.FC = () => {
  const router = useRouter()

  const closeModal = () => {
    router.back()
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 flex justify-center items-center"
      onClick={closeModal}
    >
      <div className="w-[600px] bg-white rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between">
          <div className="flex flex-row justify-center items-center"></div>
          <button className="pointer" onClick={closeModal}>
            X
          </button>
        </div>
        <PostPage onClose={closeModal} />
      </div>
    </div>
  )
}

export default Post
