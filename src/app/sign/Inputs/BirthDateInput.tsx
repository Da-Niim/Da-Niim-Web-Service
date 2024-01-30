import React, { useRef, useState } from "react"
import BirthDateSelector from "./BirthDate"

const BirthDateComponent: React.FC = () => {
  const yearRef = useRef<HTMLSelectElement>(null)
  const monthRef = useRef<HTMLSelectElement>(null)
  const dayRef = useRef<HTMLSelectElement>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>("2002-11-11")

  const years = Array.from({ length: 104 }, (_, index) => {
    const year: number = new Date().getFullYear() - index
    return { label: String(year), value: String(year) }
  })

  const months = Array.from({ length: 12 }, (_, index) => {
    const month: number = index + 1
    return { label: String(month), value: String(month) }
  })

  const days = Array.from({ length: 31 }, (_, index) => {
    const day: number = index + 1
    return { label: String(day), value: String(day) }
  })

  const handleYearChange = () => {
    const selectedYear = yearRef.current?.value || "2024"
    const selectedMonth = monthRef.current?.value || "01"
    const selectedDay = dayRef.current?.value || "01"

    const newDate = `${selectedYear}-${selectedMonth}-${selectedDay}`
    setSelectedDate(newDate)
  }

  const handleMonthChange = () => {
    const selectedYear = yearRef.current?.value || "2024"
    const selectedMonth = monthRef.current?.value || "01"
    const selectedDay = dayRef.current?.value || "01"

    const newDate = `${selectedYear}-${selectedMonth}-${selectedDay}`
    setSelectedDate(newDate)
  }

  const handleDayChange = () => {
    const selectedYear = yearRef.current?.value || "2024"
    const selectedMonth = monthRef.current?.value || "01"
    const selectedDay = dayRef.current?.value || "01"

    const newDate = `${selectedYear}-${selectedMonth}-${selectedDay}`
    setSelectedDate(newDate)
  }

  return (
    <div className="flex flex-col w-[320px] justify-center">
      <label className="flex ">생년월일</label>
      <div className="flex flex-row">
        <BirthDateSelector label="년" values={years} onChange={handleYearChange} ref={yearRef} />
        <BirthDateSelector label="월" values={months} onChange={handleMonthChange} ref={monthRef} />
        <BirthDateSelector label="일" values={days} onChange={handleDayChange} ref={dayRef} />
      </div>
    </div>
  )
}

export default BirthDateComponent
