import NavigationBarLogoComponent from "@components/navigationBar/atoms/NavigationBarLogoComponent"
import { MAIN_NAVIGATION_BAR_LIST, SIDE_NAVIGATION_BAR_LIST } from "@components/navigationBar/constant"
import NavigationButtonContainer from "@components/navigationBar/organisms/NavigationButtonContainer"

export default function GlobalNavigationBar() {
  return (
    <div className="w-full flex items-center h-[6.25rem] border border-solid border-bottom-[#D7D7D7] justify-between px-[3vw]">
      <NavigationBarLogoComponent />
      <NavigationButtonContainer buttonList={MAIN_NAVIGATION_BAR_LIST} gap="6.8vw" />
      <div className="hidden lg:flex">
        <NavigationButtonContainer buttonList={SIDE_NAVIGATION_BAR_LIST} gap="1.7vw" />
      </div>
    </div>
  )
}
