import { useGetMyFeeds } from "@hooks/useGetMyFeeds"
import PostContent from "../atoms/PostContent"

const PostContainer = () => {
  const { data } = useGetMyFeeds()
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 w-full mt-6 gap-2">
      {data?.data.map((feed) => {
        return (
          <PostContent
            id={feed.id}
            commentCount={feed.commentCount}
            likeCount={feed.likeCount}
            photoUrl={feed.photoUrl}
            key={feed.id}
          />
        )
      })}
    </div>
  )
}

export default PostContainer
