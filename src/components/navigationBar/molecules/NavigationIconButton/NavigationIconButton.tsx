import NavigationBarSvgComponent from "@components/navigationBar/atoms/NavigationBarSvgComponent"

interface NavigationIconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  iconName: string
  path: string
}

export default function NavigationIconButton({ iconName, path, ...props }: NavigationIconButtonProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      {props.children}
      <NavigationBarSvgComponent path={path} iconName={iconName} />
    </div>
  )
}
