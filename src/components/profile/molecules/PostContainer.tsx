import PostContent from "../atoms/PostContent"

const PostContainer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mt-6 gap-2">
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
    </div>
  )
}

export default PostContainer
