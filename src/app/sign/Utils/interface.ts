export interface IForm {
  username: string
  userId: string
  nickname: string
  password: string
  repassword: string
  email: string
  phoneNumber: string
  gender: "MALE" | "FEMALE"
  birthDate: string
  key?: string
}

export interface GenderButtonProps {
  gender: "MALE" | "FEMALE"
  selectedGender: "MALE" | "FEMALE" | null
  handleGenderSelection: (gender: "MALE" | "FEMALE") => void
}

export interface BirthDateSelectorProps {
  label?: string
  values: { label: string; value: string }[]
  onChange: (value: string) => void
  ref?: React.RefObject<HTMLSelectElement>
  onDateChange?: {
    onDateChange: (year: string, month: string, day: string) => void // 상위 컴포넌트로 선택된 날짜를 전달하는 콜백 함수
  }
}
