import React, { forwardRef } from "react"
import { ctm } from "@utils/styles"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ className, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={ctm(`p-4 border border-gray-500 rounded-lg font-normal w-full`, className)}
    />
  )
}
export default forwardRef(Input)
