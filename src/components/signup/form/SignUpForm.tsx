"use client"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { BirthDateComponent, GenderButton } from "@components/signup"
import InputComponent from "@components/signup/InputComponent"
import { registerUser } from "@components/signup/api"
import { SignFormProps } from "../utils"
import { classNameStyle } from "../styles"

const SignForm: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<"MALE" | "FEMALE" | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>("")

  const handleGenderSelection = (gender: "MALE" | "FEMALE") => {
    setSelectedGender(gender)
  }
  const handleDateChange = (date: string | null) => {
    setSelectedDate(date)
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignFormProps>({
    mode: "onBlur",
  })
  const renderInputComponent = (
    labelname: string,
    name: string,
    label: string,
    rules?: Record<string, unknown>,
    type?: string,
  ) => (
    <InputComponent
      control={control}
      labelname={labelname}
      name={name}
      rules={rules}
      placeholder={`Enter your ${label}`}
      classNames={classNameStyle}
      errors={errors}
      type={type}
    />
  )

  const onSubmitForm = async (data: SignFormProps) => {
    const formData = {
      userId: data.userId,
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber,
      gender: selectedGender,
      username: data.username,
      nickname: data.nickname,
      birthDate: selectedDate,
    }
    try {
      await registerUser(formData)
    } catch (error) {
      console.error("회원가입 실패:", error)
    }
  }

  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
  const passwordMessage = `영문(대소문자), 숫자, 특수 문자를 혼합하여
  8자 이상 20자 이내로 입력해주세요.`
  const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  const PhoneNumberPattern = /^010-\d{4}-\d{4}$/

  const isFormValid =
    Object.keys(errors).length === 0 &&
    Object.values(watch()).every((value) => value !== "") &&
    watch("password") === watch("repassword") &&
    selectedDate !== "" &&
    (selectedGender === "MALE" || selectedGender === "FEMALE") &&
    selectedGender !== null &&
    watch("email") !== "" &&
    watch("phoneNumber") !== "" &&
    watch("email")?.match(emailPattern) &&
    watch("phoneNumber")?.match(PhoneNumberPattern)

  return (
    <form className="flex flex-col items-center justify-center h-full w-full" onSubmit={handleSubmit(onSubmitForm)}>
      {renderInputComponent("아이디", "userId", "ID", { maxLength: 10, minLength: 3 })}
      {renderInputComponent(
        "비밀번호",
        "password",
        "Password",
        {
          maxLength: 20,
          minLength: 8,
          pattern: {
            value: passwordPattern,
            message: passwordMessage,
          },
        },
        "password",
      )}
      {renderInputComponent(
        "비밀번호 확인",
        "repassword",
        "Password Confirmation",
        {
          maxLength: 20,
          minLength: 8,
          pattern: {
            value: passwordPattern,
            message: passwordMessage,
          },
        },
        "password",
      )}
      {renderInputComponent("이름", "username", "Name", { maxLength: 10, minLength: 3 })}
      {renderInputComponent("닉네임", "nickname", "Nickname", { maxLength: 10, minLength: 2 })}
      <BirthDateComponent selectedDate={selectedDate} onDateChange={handleDateChange} />
      <div className="flex flex-col w-80">
        <label className="pl-2px pb-1">성별 </label>
        <div className="flex flex-row justify-between  w-80">
          <GenderButton gender="MALE" selectedGender={selectedGender} handleGenderSelection={handleGenderSelection} />
          <GenderButton gender="FEMALE" selectedGender={selectedGender} handleGenderSelection={handleGenderSelection} />
        </div>
      </div>
      {renderInputComponent("이메일", "email", "E-mail", {
        pattern: {
          value: emailPattern,
          message: "Invalid email format.",
        },
      })}
      {renderInputComponent("핸드폰 번호", "phoneNumber", "Phone Number", {
        pattern: {
          value: PhoneNumberPattern,
          message: "Invalid phone number format.",
        },
        maxLength: { value: 13, message: "Maximum length is 13 characters." },
      })}
      <button
        className={`mt-8 bg-submit-bg-color text-white w-80 h-12 ${isFormValid ? "" : "cursor-not-allowed opacity-50"}`}
      >
        회원가입
      </button>
    </form>
  )
}

export default SignForm