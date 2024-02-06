import { GenderButtonProps } from "../Utils"

const GenderButton: React.FC<GenderButtonProps> = ({ gender, selectedGender, handleGenderSelection }) => {
  return (
    <button
      className={`gender-btn w-28 h-10 ${selectedGender === gender ? "selected" : ""}`}
      onClick={() => handleGenderSelection(gender)}
      style={{
        backgroundColor: selectedGender === gender ? "#d2b48c" : "#ebebeb",
        color: selectedGender === gender ? "#000000" : "#b49264",
      }}
    >
      {gender === "MALE" ? "남성" : "여성"}
    </button>
  )
}
export { default as GenderButton } from "./GenderButton"
export default GenderButton
