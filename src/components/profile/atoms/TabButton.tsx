import { ctm } from "@utils/styles"
import React from "react"

interface TabButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean
}

const TabButton = ({ isSelected, ...props }: TabButtonProps) => {
  return (
    <button
      className={ctm(
        `pb-1.5 w-fit px-12 text-base font-normal border-b-gray-900 text-gray-600`,
        isSelected ? "font-bold text-gray-900 border-b" : undefined,
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default TabButton
