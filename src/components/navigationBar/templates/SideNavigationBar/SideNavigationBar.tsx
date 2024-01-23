import { SIDE_NAVIGATION_BAR_LIST } from "@components/navigationBar/constant"
import SideNavigationContainer from "@components/navigationBar/organisms/SideNavigationContainer"
import React from "react"

const SideNavigationBar = () => {
  return (
    <div className="min-h-full w-[20rem] border-r border-[#C6C6C6] flex flex-col items-center justify-center">
      <SideNavigationContainer buttonList={SIDE_NAVIGATION_BAR_LIST} />
    </div>
  )
}

export default SideNavigationBar
