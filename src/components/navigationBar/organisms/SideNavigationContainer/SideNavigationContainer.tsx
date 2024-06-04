"use client"
import SideNavigationButton from "@components/navigationBar/molecules/SideNavigationButton"
import { NavigationBarItemProps } from "@components/navigationBar/utils/interface"
import { NavigationButtonType } from "@components/navigationBar/utils/type"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React from "react"

interface SideNavigationContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonList: NavigationBarItemProps<NavigationButtonType>[]
}
const SideNavigationContainer = ({ buttonList, ...props }: SideNavigationContainerProps) => {
  const { data } = useSession()
  const router = useRouter()
  const onClickSideNavigationButton = (path: string) => {
    if (!data) return
    return router.push(path)
  }
  return (
    <div className={`w-full h-full flex flex-col align-start justify-start gap-8 pt-14 px-9`}>
      {buttonList.map((iconButton, idx) => {
        return (
          <SideNavigationButton
            key={idx}
            onClick={() => onClickSideNavigationButton(iconButton.path)}
            buttonItem={iconButton}
          />
        )
      })}
    </div>
  )
}

export default SideNavigationContainer
