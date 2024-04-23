"use client"
import React from "react"
import { useRouter } from "next/navigation"
import PostPage from "@components/feed/PostPage"

interface PostProps {
  onClose?: () => void
}

const Post: React.FC<PostProps> = ({ onClose }) => {
  const router = useRouter()

  const closeModal = () => {
    router.back()
    onClose && onClose()
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 flex justify-center items-center"
      onClick={closeModal}
    >
      <div className="w-[600px] bg-white rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
        <PostPage onClose={closeModal} />
        <button onClick={closeModal} className="mt-4 w-full bg-gray-200 py-2 rounded-md">
          닫기
        </button>
      </div>
    </div>
  )
}

export default Post
