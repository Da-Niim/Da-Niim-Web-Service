import React, { useRef, forwardRef, useImperativeHandle } from "react"
import { BirthDateSelectorProps } from "../Utils/interface"

const BirthDateSelector: React.ForwardRefRenderFunction<HTMLSelectElement, BirthDateSelectorProps> = (
  { label, values, onChange },
  ref,
) => {
  const selectRef = useRef<HTMLSelectElement>(null)

  useImperativeHandle(ref, () => selectRef.current as HTMLSelectElement)

  const handleChange = () => {
    const selectedValue = selectRef.current?.value || ""
    onChange(selectedValue)
  }

  return (
    <div className="flex flex-row justify-around items-center">
      <select className="flex border-2 border-[#b9b9b9] mb-2" ref={selectRef} onChange={handleChange}>
        {values.map((value) => (
          <option key={value.value} value={value.value}>
            {value.label}
          </option>
        ))}
      </select>
      <label className="pl-4 pb-2 ml-2 mr-6">{label}</label>
    </div>
  )
}

export default forwardRef(BirthDateSelector)
