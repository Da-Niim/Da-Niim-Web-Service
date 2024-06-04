import React from "react"
import PostSelcetPage from "@components/feed/PostSelectPage"

interface PostProps {
  onClose: () => void
}

const PostModal: React.FC<PostProps> = ({ onClose }) => {
  return <PostSelcetPage onClose={onClose} />
}

export default PostModal
