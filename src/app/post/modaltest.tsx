import React from "react"
import PostPage from "@components/feed/postPage"

interface PostProps {
  onClose: () => void
}

const Post: React.FC<PostProps> = ({ onClose }) => {
  return <PostPage onClose={onClose} />
}

export default Post
