import { TextElementProps } from "@utils/interface"

export const NavigationSpanElement = ({ ...props }: TextElementProps) => {
  return (
    <span className="text-sm text-[#2C2C2E] font-normal ml-4" {...props}>
      {props.children}
    </span>
  )
}
