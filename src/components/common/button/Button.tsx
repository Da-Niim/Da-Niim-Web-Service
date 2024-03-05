import { ctm } from "@utils/styles"
import React from "react"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={ctm(`bg-essential-500 px-20 rounded-xl w-fit py-4 text-white font-semibold`, className)}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
