import NavigationBarSvgComponent from "@components/navigationBar/atoms/NavigationBarSvgComponent"
import { NavigationBarItemProps } from "@components/navigationBar/utils/interface"
import { NavigationButtonType } from "@components/navigationBar/utils/type"
import React from "react"

interface SideNavigationButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonItem: NavigationBarItemProps<NavigationButtonType>
}

const SideNavigationButton = ({ buttonItem, ...props }: SideNavigationButtonProps) => {
  return (
    <div className="flex items-center justify-start px-[4rem]">
      <NavigationBarSvgComponent path={buttonItem.path} iconName={buttonItem.icon} />
      <p className="ml-4">{buttonItem.title}</p>
    </div>
  )
}

export default SideNavigationButton
