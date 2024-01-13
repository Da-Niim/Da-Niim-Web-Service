import { MAIN_NAVIGATION_BAR_LIST, SIDE_NAVIGATION_BAR_LIST } from "@components/navigationBar/constant"
import NavigationButtonContainer from "@components/navigationBar/organisms/NavigationButtonContainer"
import Image from "next/image"
import Link from "next/link"

export default function GlobalNavigationBar() {
  return (
    <div className="flex items-center h-[6.25rem] border border-solid border-bottom-[#D7D7D7] justify-between px-[3vw]">
      <Link href="/">
        <div
          className="flex items-center justify-center w-full h-auto
          cursor-pointer"
        >
          <Image src="/assets/images/logo.png" width={120} height={40} alt="logo" />
        </div>
      </Link>
      <NavigationButtonContainer buttonList={MAIN_NAVIGATION_BAR_LIST} gap="6.8vw" />
      <div className="hidden lg:flex">
        <NavigationButtonContainer buttonList={SIDE_NAVIGATION_BAR_LIST} gap="1.7vw" />
      </div>
    </div>
  )
}
