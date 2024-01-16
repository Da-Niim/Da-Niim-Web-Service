import NavigationIconButton from "@components/navigationBar/molecules/NavigationIconButton"
import { NavigationBarItemProps } from "@components/navigationBar/utils/interface"
import { NavigationButtonType } from "@components/navigationBar/utils/type"
import Link from "next/link"

interface NavigationButtonContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonList: NavigationBarItemProps<NavigationButtonType>[]
}

export default function HeaderNavigationButtonContainer({ buttonList, ...props }: NavigationButtonContainerProps) {
  return (
    <div className={`w-fit flex align-center justify-center gap-[1.4vw]`}>
      {buttonList.map((iconButton, idx) => {
        return <NavigationIconButton key={idx} path={iconButton.path} iconName={iconButton.icon} />
      })}
    </div>
  )
}
