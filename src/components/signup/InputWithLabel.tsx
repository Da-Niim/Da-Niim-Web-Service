import React, { forwardRef } from "react"
import { ctm } from "@utils/styles"

interface InputProps {
  label: string
  register: any
  name: string
  type?: string
  placeholder?: string
  error?: string | boolean
  pattern?: RegExp
}

const InputWithLabel: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  label,
  register,
  name,
  type = "text",
  placeholder,
  error,
  pattern,
}) => {
  return (
    <div className="w-full p-2 flex flex-col">
      <label>{label}</label>
      <input
        className={ctm(`p-4 border border-gray-500 rounded-lg font-normal w-full`)}
        type={type}
        {...register(name, { pattern })}
        placeholder={placeholder}
        name={name}
      />
      {error && <div className="justify-start w-full pl-2">{error}</div>}
    </div>
  )
}

export default InputWithLabel
