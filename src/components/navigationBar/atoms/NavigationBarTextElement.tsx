import { TextElementProps } from "@utils/interface"

export const NavigationSpanElement = ({ ...props }: TextElementProps) => {
  return (
    <span className="text-sm text-[#181818] font-normal mt-[0.25rem]" {...props}>
      {props.children}
    </span>
  )
}
