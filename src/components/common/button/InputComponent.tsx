import React from "react"
import { Input } from "@nextui-org/react"
import { Controller } from "react-hook-form"
import { InputProps } from "@utils/interface"

const InputComponent: React.FC<InputProps> = ({
  control,
  labelName,
  name,
  rules,
  placeholder,
  classNames,
  errors,
  type,
}) => {
  const phoneMask = (value: string) => {
    let formattedValue = value
    if (name === "phoneNumber") {
      const clearValue = value.replace(/[^0-9]/g, "")
      const match = clearValue.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/)

      if (match) {
        formattedValue = match
          .slice(1)
          .filter((group) => group !== "")
          .join("-")
      }
    }
    return formattedValue.substring(0, 13)
  }

  return (
    <div className={classNames?.inputWrapper.join(" ")}>
      <label className="pl-2px">{labelName} </label>
      <div className="flex flex-col w-80">
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
                    field.onChange(maskedValue)
                  } else {
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
        {errors[name] && <p className="error m-0">{errors[name]?.message}</p>}
      </div>
    </div>
  )
}

export default InputComponent
