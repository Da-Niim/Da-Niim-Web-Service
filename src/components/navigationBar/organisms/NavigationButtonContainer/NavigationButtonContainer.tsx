"use client"
import NavigationIconButton from "@components/navigationBar/molecules/NavigationIconButton"
import { NavigationBarItemProps } from "@components/navigationBar/utils/interface"
import { NavigationButtonType } from "@components/navigationBar/utils/type"
import Link from "next/link"

interface NavigationButtonContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonList: NavigationBarItemProps<NavigationButtonType>[]
  gap: string
}

export default function NavigationButtonContainer({ buttonList, gap, ...props }: NavigationButtonContainerProps) {
  return (
    <div style={{ gap }} className={`w-fit flex align-center justify-center`}>
      {buttonList.map((iconButton, idx) => {
        return (
          <Link key={idx} href={iconButton.navigationURL}>
            <NavigationIconButton iconName={iconButton.title} />
          </Link>
        )
      })}
    </div>
  )
}
