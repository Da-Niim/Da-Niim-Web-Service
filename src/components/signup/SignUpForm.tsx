"use client"
import { registerUser } from "@utils/api"
import React from "react"
import { useForm } from "react-hook-form"
import Button from "@components/common/Button"
import Input from "@components/common/Input"
import { UserValue, Gender, SignFormProps } from "@utils/interface/SignUpInterface"
import GenderButton from "@components/common/GenderButton"
import {
  IdPattern,
  PasswordPattern,
  PasswordMessage,
  PasswordMessage2,
  EmailPattern,
  PhoneNumberPattern,
  formatPhoneNumber,
  DateComponent,
} from "./constants"

const SignForm: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<UserValue>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      nickname: "",
      userId: "",
      rePassword: "",
      username: "",
      gender: Gender.MALE,
      phoneNumber: "",
    },
  })
  const { years, months, days } = DateComponent()
  const handleGenderSelection = (selectedGender: Gender) => {
    setValue("gender", selectedGender)
  }
  const onSubmitForm = async (data: SignFormProps) => {
    const DateSelect = `${watch("years")}` + "-" + `${watch("months")}` + "-" + `${watch("days")}`
    const formData = {
      ...data,
      birthDate: DateSelect,
    }
    try {
      await registerUser(formData)
      console.log(formData)
    } catch (error) {
      console.error("회원가입 실패:", error)
    }
  }
  return (
    <form className="flex flex-col items-center justify-center w-80" onSubmit={handleSubmit(onSubmitForm)}>
      <label className="w-full m-2">아이디</label>
      <Input required placeholder="아이디 입력 해 주세요" {...register("userId", { pattern: IdPattern })} />
      {errors.userId && <div className="w-full justify-start pl-2">ID는 3~10 글자로 입력해 주세요</div>}
      <label className="w-full m-2">비밀번호</label>
      <Input
        required
        placeholder="비밀번호를 입력 해 주세요"
        type="password"
        {...register("password", { pattern: PasswordPattern })}
      />
      {errors.password && <div className="justify-start w-full pl-2">{PasswordMessage}</div>}
      {errors.password && <div className="justify-start w-full pl-2">{PasswordMessage2}</div>}
      <label className="w-full m-2">비밀번호 확인 </label>
      <Input required placeholder="비밀번호를 입력 해 주세요" type="password" {...register("rePassword")} />
      {watch("rePassword") !== watch("rePassword") && (
        <div className="w-full justify-start pl-2">비밀번호를 확인 해주세요</div>
      )}
      <label className="w-full m-2">이름</label>
      <Input required placeholder="이름을 입력 해 주세요" {...register("username", { minLength: 2, maxLength: 5 })} />
      {errors.username && <div className="w-full justify-start pl-2">이름을 확인 해 주세요</div>}
      <label className="w-full m-2">닉네임</label>
      <Input required {...register("nickname")} placeholder="닉네임을 입력 해 주세요" />
      <label className="w-full m-2">생년월일</label>
      <div className="flex w-full justify-around h-12">
        <select {...register("years")}>
          {years.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <select {...register("months")}>
          {months.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <select {...register("days")}>
          {days.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-col w-full">
        <label className="pl-2px pb-1">성별 </label>
        <div className="flex flex-row justify-between">
          {Object.values(Gender).map((gender) => (
            <GenderButton
              key={gender}
              gender={gender}
              isSelected={watch("gender") === gender}
              onClick={() => handleGenderSelection(gender)}
            />
          ))}
        </div>
      </div>
      <label className="w-full m-2">휴대폰 번호</label>
      <Input
        placeholder="휴대폰번호를 입력 해 주세요"
        required
        {...register("phoneNumber", {
          pattern: PhoneNumberPattern,
        })}
        value={watch("phoneNumber")}
        onChange={(e) => {
          const formattedValue = formatPhoneNumber(e.target.value)
          setValue("phoneNumber", formattedValue)
        }}
      />
      {errors.phoneNumber && <div className="w-full justify-start pl-2">010-XXXX-XXXX 형식으로 입력해주세요</div>}
      <label className="w-full m-2">이메일</label>
      <Input
        placeholder="이메일을 입력 해 주세요"
        type="email"
        required
        {...register("email", { pattern: EmailPattern })}
      />
      <Button className={`mt-8 w-full`}>회원가입</Button>
    </form>
  )
}

export default SignForm
