import React from "react"
import { ctm } from "@utils/styles"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input {...props} className={ctm(`p-4 border border-gray-500 rounded-lg font-normal w-full`, className)} />
}
export default Input
