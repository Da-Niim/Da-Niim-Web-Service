import { ctm } from "@utils/styles"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={ctm(
        `bg-essential-500 px-20 rounded-xl w-fit py-4 text-white font-semibold hover:bg-essential-400 disabled:bg-gray-300`,
        className,
      )}
    >
      {props.children}
    </button>
  )
}

export default Button
