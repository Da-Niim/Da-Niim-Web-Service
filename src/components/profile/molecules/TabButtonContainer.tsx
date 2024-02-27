import TabButton from "../atoms/TabButton"
import { TabButtonType } from "../utils/type"

interface TabButtonContainerProps {
  selectedPostType: TabButtonType
  setPostType: (type: TabButtonType) => void
}

const TabButtonContainer = ({ selectedPostType, setPostType }: TabButtonContainerProps) => {
  return (
    <div className="flex w-fit border-b border-b-gray-900">
      <TabButton isSelected={selectedPostType === "FEED"} onClick={() => setPostType("FEED")}>
        게시글
      </TabButton>
      <TabButton isSelected={selectedPostType === "TRAVELOG"} onClick={() => setPostType("TRAVELOG")}>
        여행기
      </TabButton>
    </div>
  )
}

export default TabButtonContainer
