export interface SignFormProps {
  username: string
  userId: string
  nickname: string
  password: string
  rePassword: string
  email: string
  phoneNumber: string
  gender: "MALE" | "FEMALE"
  birthDate: string
  key?: string
}

export interface InputProps {
  control: any
  labelName: string
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
    onDateChange: () => void
  }
}
