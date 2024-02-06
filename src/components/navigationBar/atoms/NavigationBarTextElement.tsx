import { TextElementProps } from "@utils/interface"

export const NavigationSpanElement = ({ ...props }: TextElementProps) => {
  return (
    <span className="text-sm text-gray-900 font-normal ml-4" {...props}>
      {props.children}
    </span>
  )
}
