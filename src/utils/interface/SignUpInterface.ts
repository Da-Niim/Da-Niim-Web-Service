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

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
export interface InputProps {
  control: any
  labelName: string
  name: string
  rules: any
  placeholder: string
  errors: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

export interface UserValue {
  email: string
  password: string
  rePassword: string
  nickname: string
  userId: string
  username: string
  gender: Gender.MALE | Gender.FEMALE
  years: string
  months: string
  days: string
  phoneNumber: string
  birthDate: string
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
