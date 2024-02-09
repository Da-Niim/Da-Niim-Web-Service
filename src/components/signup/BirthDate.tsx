import React, { forwardRef } from "react"
import { BirthDateSelectorProps } from "./utils/interface"

const BirthDateSelector = forwardRef<HTMLSelectElement, BirthDateSelectorProps>(({ label, values, onChange }, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    onChange(selectedValue)
  }

  return (
    <div className="flex flex-row justify-around items-center">
      <select className="flex border-2 border-[#b9b9b9] mb-2" ref={ref} onChange={handleChange}>
        {values.map((value) => (
          <option key={value.value} value={value.value}>
            {value.label}
          </option>
        ))}
      </select>
      <label className="pl-4 pb-2 ml-2 mr-6">{label}</label>
    </div>
  )
})

export { BirthDateSelector }
export default BirthDateSelector
