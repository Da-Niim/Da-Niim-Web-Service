import NavigationBarSvgComponent from "@components/navigationBar/atoms/NavigationBarSvgComponent"

interface NavigationIconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  iconName: string
  isSelected?: boolean
}

export default function NavigationIconButton({ iconName, isSelected, ...props }: NavigationIconButtonProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {props.children}
      <NavigationBarSvgComponent iconName={iconName} />
    </div>
  )
}
