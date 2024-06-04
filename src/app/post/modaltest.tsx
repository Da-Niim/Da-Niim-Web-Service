import React from "react"
import PostSelcetPage from "@components/feed/postSelectPage"

interface PostProps {
  onClose: () => void
}

const PostModal: React.FC<PostProps> = ({ onClose }) => {
  return <PostSelcetPage onClose={onClose} />
}

export default PostModal
