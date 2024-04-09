import React from "react"

interface InputProps {
  label: string
  register: any
  name: string
  type?: string
  placeholder?: string
  error?: string | boolean
  pattern?: RegExp
}

const InputWithLabel: React.FC<InputProps> = ({
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
      <input type={type} {...register(name, { pattern })} placeholder={placeholder} />
      {error && <div className="justify-start w-full pl-2">{error}</div>}
    </div>
  )
}

export default InputWithLabel
