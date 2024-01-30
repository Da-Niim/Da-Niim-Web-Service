// components/Sign/Inputs/Input.tsx
import React from "react"
import { Input } from "@nextui-org/react"
import { Controller } from "react-hook-form"
import { InputProps } from "../Utils/interface"

const InputComponent: React.FC<InputProps> = ({
  control,
  labelname,
  name,
  rules,
  placeholder,
  classNames,
  errors,
  type,
}) => {
  const phoneMask = (value: string) => {
    const clearValue = value.replace(/[^0-9]/g, "")
    const match = clearValue.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/)

    if (match) {
      const formattedValue = match
        .slice(1)
        .filter((group) => group !== "")
        .join("-")
      return formattedValue
    }
    return value
  }

  return (
    <div className={classNames?.inputWrapper.join(" ")}>
      <label className="pl-2px">{labelname} </label>
      <div className="flex flex-col w-80 h-12">
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field }) => (
            <>
              <Input
                {...field}
                value={field.value || ""}
                onChange={(e) => {
                  let maskedValue = phoneMask(e.target.value)
                  // 11자리까지만 입력되도록 설정
                  if (maskedValue.length <= 13) {
                    field.onChange(maskedValue)
                  }
                }}
                radius="full"
                isRequired
                variant="bordered"
                placeholder={`${placeholder}`}
                classNames={classNames}
                type={type || "text"}
              />
            </>
          )}
        />
        {errors[name] && <p className="error">{errors[name]?.message}</p>}
      </div>
    </div>
  )
}

export default InputComponent
