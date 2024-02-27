import React, { useRef, useEffect } from "react"
import { BirthDateSelector } from "@components/signup"

const BirthDateComponent: React.FC<{ selectedDate: string | null; onDateChange: (date: string | null) => void }> = ({
  selectedDate,
  onDateChange,
}) => {
  const yearRef = useRef<HTMLSelectElement>(null)
  const monthRef = useRef<HTMLSelectElement>(null)
  const dayRef = useRef<HTMLSelectElement>(null)

  const years = Array.from({ length: 104 }, (_, index) => {
    const year: number = new Date().getFullYear() - index
    return { label: String(year), value: String(year) }
  })

  const months = Array.from({ length: 12 }, (_, index) => {
    const month: number = index + 1
    return { label: String(month).padStart(2, "0"), value: String(month).padStart(2, "0") }
  })

  const days = Array.from({ length: 31 }, (_, index) => {
    const day: number = index + 1
    return { label: String(day).padStart(2, "0"), value: String(day).padStart(2, "0") }
  })

  const handleYearChange = (value: string) => {
    updateDate(value, monthRef.current?.value || "", dayRef.current?.value || "")
  }

  const handleMonthChange = (value: string) => {
    updateDate(yearRef.current?.value || "", value, dayRef.current?.value || "")
  }

  const handleDayChange = (value: string) => {
    updateDate(yearRef.current?.value || "", monthRef.current?.value || "", value)
  }

  const updateDate = (year: string, month: string, day: string) => {
    const date = `${year}-${month}-${day}`
    onDateChange(date)
  }

  useEffect(() => {
    if (selectedDate) {
      const [year, month, day] = selectedDate.split("-")
      yearRef.current!.value = year
      monthRef.current!.value = month
      dayRef.current!.value = day
    }
  }, [selectedDate])

  return (
    <div className="flex flex-col w-[320px] justify-center">
      <label className="flex">생년월일</label>
      <div className="flex flex-row">
        <BirthDateSelector label="년" values={years} onChange={handleYearChange} ref={yearRef} />
        <BirthDateSelector label="월" values={months} onChange={handleMonthChange} ref={monthRef} />
        <BirthDateSelector label="일" values={days} onChange={handleDayChange} ref={dayRef} />
      </div>
    </div>
  )
}

export { BirthDateComponent }
export default BirthDateComponent
