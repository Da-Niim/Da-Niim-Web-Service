import React from "react"
import { Gender } from "@utils/interface/SignUpInterface"

interface GenderButtonProps {
  gender: Gender
  isSelected: boolean
  onClick: () => void
}

const GenderButton: React.FC<GenderButtonProps> = ({ gender, isSelected, onClick }) => {
  return (
    <button
      className={`w-28 h-10 ${isSelected ? "bg-submit-bg-color text-black" : "bg-gray-300 text-gray-600"} focus:outline-none rounded-md mr-2`}
      onClick={onClick}
    >
      {gender === Gender.MALE ? "남성" : "여성"}
    </button>
  )
}

export default GenderButton
