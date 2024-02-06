export interface SignFormProps {
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

export interface InputProps {
  control: any
  labelname: string
  name: string
  rules: any
  placeholder: string
  classNames: {
    input: string[]
    inputWrapper: string[]
  }
  errors: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  // mask?: string
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
  // onChange: string
  ref?: React.RefObject<HTMLSelectElement>
  onDateChange?: {
    onDateChange: (year: string, month: string, day: string) => void
  }
}
