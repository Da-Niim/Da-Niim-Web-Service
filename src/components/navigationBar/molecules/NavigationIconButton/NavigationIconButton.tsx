import NavigationBarSvgComponent from "@components/navigationBar/atoms/NavigationBarSvgComponent"

interface NavigationIconButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  iconName: string
  path: string
}

export default function NavigationIconButton({ iconName, path, ...props }: NavigationIconButtonProps) {
  return (
    <div className="flex justify-start w-full items-center">
      {props.children}
      <NavigationBarSvgComponent path={path} iconName={iconName} />
    </div>
  )
}
