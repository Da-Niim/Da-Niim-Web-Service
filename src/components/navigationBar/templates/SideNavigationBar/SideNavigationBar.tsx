import { SIDE_NAVIGATION_BAR_LIST } from "@components/navigationBar/constant"
import SideNavigationContainer from "@components/navigationBar/organisms/SideNavigationContainer"

const SideNavigationBar = () => {
  return (
    <div className="flex-1 w-80 border-r border-[#C6C6C6] flex flex-col items-center justify-center">
      <SideNavigationContainer buttonList={SIDE_NAVIGATION_BAR_LIST} />
    </div>
  )
}

export default SideNavigationBar
