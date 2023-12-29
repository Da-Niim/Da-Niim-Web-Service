import Image from "next/image"
import { NavigationButtonType } from "../utils/type"

interface NavigationBarSvgComponentProps {
  iconName: NavigationButtonType
}

const NavigationBarSvgComponent: React.FC<NavigationBarSvgComponentProps> = ({ iconName, ...props }) => {
  return <Image {...props} src={`../../../assets/svgs/${iconName}.svg`} width={25} height={24} alt={iconName} />
}

export default NavigationBarSvgComponent
