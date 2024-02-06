import React from "react"
import { Input } from "@nextui-org/react"
import { Controller } from "react-hook-form"
import { InputProps } from "../Utils"

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
    if (name === "phoneNumber") {
      const clearValue = value.replace(/[^0-9]/g, "")
      const match = clearValue.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/)

      if (match) {
        const formattedValue = match
          .slice(1)
          .filter((group) => group !== "")
          .join("-")
        return formattedValue
      }
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
                value={field.value}
                onChange={(e) => {
                  if (name === "phoneNumber") {
                    const maskedValue = phoneMask(e.target.value)
                    if (maskedValue.length <= 13) {
                      field.onChange(maskedValue)
                    }
                  } else {
                    // phoneNumber가 아닌 경우에는 mask 적용하지 않음
                    field.onChange(e.target.value)
                  }
                }}
                placeholder={placeholder}
                radius="full"
                isRequired
                variant="bordered"
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
