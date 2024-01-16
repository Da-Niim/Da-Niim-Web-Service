"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface NavigationBarSvgComponentProps {
  iconName: string
  path: string
}

const NavigationBarSvgComponent: React.FC<NavigationBarSvgComponentProps> = ({ iconName, path, ...props }) => {
  const pathname = usePathname()
  return (
    <div
      className="flex items-center justify-center w-fit h-auto
    cursor-pointer"
    >
      <Image
        {...props}
        placeholder="empty"
        priority={false}
        src={`/assets/images/navigation/${iconName + (pathname === path ? "-selected" : "")}.png`}
        width={24}
        height={24}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        alt={iconName}
      />
    </div>
  )
}

export default NavigationBarSvgComponent
