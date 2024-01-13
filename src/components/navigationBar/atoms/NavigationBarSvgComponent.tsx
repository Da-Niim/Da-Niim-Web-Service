import Image from "next/image"

interface NavigationBarSvgComponentProps {
  iconName: string
}

const NavigationBarSvgComponent: React.FC<NavigationBarSvgComponentProps> = ({ iconName, ...props }) => {
  return (
    <div
      className="flex items-center justify-center w-full h-auto
    cursor-pointer"
    >
      <Image
        {...props}
        placeholder="empty"
        priority={false}
        src={`/assets/svgs/${iconName}.svg`}
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
