"use client"
import { useState } from "react"
import PostContainer from "../molecules/PostContainer"
import TabButtonContainer from "../molecules/TabButtonContainer"
import { TabButtonType } from "../utils/type"

const BottomContentContainer = () => {
  const [postType, setPostType] = useState<TabButtonType>("FEED")
  return (
    <div className="flex w-fit flex-col mt-6">
      <TabButtonContainer
        setPostType={(type) => {
          setPostType(type)
        }}
        selectedPostType={postType}
      />
      {/* feed container */}
      <PostContainer />
    </div>
  )
}

export default BottomContentContainer
