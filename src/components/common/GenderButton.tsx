import React from "react"
import { genderType } from "@components/signUp/util"
interface GenderButtonProps {
  gender: genderType
  isSelected: boolean
  onClick: () => void
}

const GenderButton: React.FC<GenderButtonProps> = ({ gender, isSelected, onClick }) => {
  return (
    <button
      className={`w-28 h-10 ${isSelected ? "bg-submit-bg-color text-black" : "bg-gray-300 text-gray-600"} focus:outline-none rounded-md mr-2`}
      onClick={onClick}
    >
      {gender === genderType.MALE ? "남성" : "여성"}
    </button>
  )
}

export default GenderButton
