import NavigationButtonContainer from "@components/navigationBar/organisms/NavigationButtonContainer"
import { MAIN_ICON_BUTTON_LIST, SIDE_ICON_BUTTON_LIST } from "@components/navigationBar/utils/constant/icon-list.const"

export default function GlobalNavigationBar() {
  return (
    <div className="flex items-center w-full h-[6.25rem] border border-solid border-bottom-[#D7D7D7] justify-between px-[50px]">
      <div />
      <NavigationButtonContainer buttonList={MAIN_ICON_BUTTON_LIST} gap="6.8vw" />
      <NavigationButtonContainer buttonList={SIDE_ICON_BUTTON_LIST} gap="1.7vw" />
    </div>
  )
}
