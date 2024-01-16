import SideNavigationButton from "@components/navigationBar/molecules/SideNavigationButton"
import { NavigationBarItemProps } from "@components/navigationBar/utils/interface"
import { NavigationButtonType } from "@components/navigationBar/utils/type"
import Link from "next/link"
import React from "react"

interface SideNavigationContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonList: NavigationBarItemProps<NavigationButtonType>[]
}
const SideNavigationContainer = ({ buttonList, ...props }: SideNavigationContainerProps) => {
  return (
    <div className={`w-full h-full flex flex-col align-start justify-start gap-[2rem] pt-[3.5rem]`}>
      {buttonList.map((iconButton, idx) => {
        return (
          <Link as={"button"} key={idx} href={iconButton.path}>
            <SideNavigationButton buttonItem={iconButton} />
          </Link>
        )
      })}
    </div>
  )
}

export default SideNavigationContainer
