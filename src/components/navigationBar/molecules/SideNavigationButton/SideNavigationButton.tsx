import NavigationBarImageComponent from "@components/navigationBar/atoms/NavigationBarImageComponent"
import { NavigationSpanElement } from "@components/navigationBar/atoms/NavigationBarTextElement"
import { NavigationBarItemProps } from "@components/navigationBar/utils/interface"
import { NavigationButtonType } from "@components/navigationBar/utils/type"
import React from "react"

interface SideNavigationButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonItem: NavigationBarItemProps<NavigationButtonType>
}

const SideNavigationButton = ({ buttonItem, ...props }: SideNavigationButtonProps) => {
  return (
    <div className="flex items-center justify-start px-[4rem]">
      <NavigationBarImageComponent path={buttonItem.path} iconName={buttonItem.icon} />
      <NavigationSpanElement>{buttonItem.title}</NavigationSpanElement>
    </div>
  )
}

export default SideNavigationButton
