import { ctm } from "@utils/styles"
import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={ctm(
        `p-4 border border-gray-500 rounded-lg font-normal w-full focus:outline-none focus:border-essential-500 focus:border`,
        className,
      )}
    />
  )
}

export default Input
