import NavigationBarSvgComponent from "@components/navigationBar/atoms/NavigationBarSvgComponent"
import { NavigationSpanElement } from "@components/navigationBar/atoms/NavigationBarTextElement"
import { NavigationButtonType } from "@components/navigationBar/utils/type"

interface NavigationIconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonType: NavigationButtonType
  isSelected?: boolean
}

export default function NavigationIconButton({ buttonType, isSelected, ...props }: NavigationIconButtonProps) {
  return (
    <div className="flex flex-col items-center justify-center ">
      {props.children}
      <NavigationBarSvgComponent iconName={buttonType} />
      {/* <NavigationSpanElement>{buttonType}</NavigationSpanElement> */}
    </div>
  )
}
