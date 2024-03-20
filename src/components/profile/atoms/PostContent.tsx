"use client"
import Image from "next/image"
import React from "react"
import FeedCommentCountIcon from "./FeedCommentCountIcon"
import FeedLikeCountIcon from "./FeedLikeCountIcon"

interface PostContentProps {
  id: string
  photoUrl: string
  likeCount: number
  commentCount: number
}

const PostContent = ({ id, likeCount, commentCount, photoUrl }: PostContentProps) => {
  const [isHover, setIsHover] = React.useState(false)
  return (
    <div className="flex flex-col items-center justify-center hover:cursor-pointer bg-slate-900 w-full rounded-md border border-[#D9D9D9]">
      {isHover && (
        <div className="absolute flex gap-6 font-bold text-white z-10">
          <div className="flex items-center gap-2 flex-row">
            <FeedLikeCountIcon />
            <div>{likeCount}</div>
          </div>
          <div className="flex items-center gap-2 flex-row">
            <FeedCommentCountIcon />
            <div>{commentCount}</div>
          </div>
        </div>
      )}
      <Image
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        src={photoUrl}
        alt="image"
        className="w-72 h-72 opacity-100 hover:opacity-60 relative"
        sizes="auto"
        width={140}
        height={140}
        style={{ objectFit: "cover" }}
      />
    </div>
  )
}

export default PostContent
