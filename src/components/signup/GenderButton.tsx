import { GenderButtonProps } from "./utils"

const GenderButton: React.FC<GenderButtonProps> = ({ gender, selectedGender, handleGenderSelection }) => {
  return (
    <button
      className={`w-28 h-10 ${
        selectedGender === gender ? "bg-submit-bg-color text-white" : "bg-gray-300 text-gray-600"
      } focus:outline-none rounded-md mr-2`}
      onClick={() => handleGenderSelection(gender)}
    >
      {gender === "MALE" ? "남성" : "여성"}
    </button>
  )
}
export { GenderButton }
export default GenderButton
