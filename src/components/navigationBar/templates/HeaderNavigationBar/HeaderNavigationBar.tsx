import NavigationBarLogoComponent from "@components/navigationBar/atoms/NavigationBarLogoComponent"
import { HEADER_NAVIGATION_BAR_LIST } from "@components/navigationBar/constant"
import NavigationButtonContainer from "@components/navigationBar/organisms/HeaderNavigationButtonContainer"

export default function HeaderNavigationBar() {
  return (
    <div className="w-full flex items-center h-[6.25rem] border border-solid border-bottom-[#D7D7D7] justify-between px-[3vw]">
      <NavigationBarLogoComponent />
      {/* <NavigationButtonContainer buttonList={MAIN_NAVIGATION_BAR_LIST} gap="6.8vw" /> */}
      <div>검색창</div>
      <div className="hidden lg:flex">
        <NavigationButtonContainer buttonList={HEADER_NAVIGATION_BAR_LIST} />
      </div>
    </div>
  )
}
