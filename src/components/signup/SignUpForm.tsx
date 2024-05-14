"use client"
import React from "react"
import Button from "@components/common/Button"
import InputWithLabel from "./InputWithLabel"
import GenderButton from "@components/common/GenderButton"
import { UserValue, SignFormProps } from "@utils/interface/signUpInterface"
import { registerUser } from "@utils/api"
import { useForm } from "react-hook-form"
import { idPattern, passwordPattern, emailPattern, phoneNumberPattern, genderType } from "./util"
import { useDateSelect } from "./hooks"
import { useRouter } from "next/navigation"

const SignForm: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<UserValue>({
    mode: "onSubmit",
    defaultValues: {},
  })

  const router = useRouter()
  const { years, months, days } = useDateSelect()
  const handleGenderSelection = (selectedGender: genderType) => {
    setValue("gender", selectedGender)
  }
  const onSubmitForm = async (data: SignFormProps) => {
    const DateSelect = `${watch("years")}` + "-" + `${watch("months")}` + "-" + `${watch("days")}`
    const formData = {
      userId: data.userId,
      password: data.password,
      username: data.username,
      nickname: data.nickname,
      gender: data.gender,
      phoneNumber: data.phoneNumber,
      email: data.email,
      birthDate: DateSelect,
    }
    try {
      const response = await registerUser(formData)
      if (response.ok) {
        console.log("성공")
        router.push("/login")
      }
    } catch (error) {
      console.log("에러", formData)
    }
  }

  return (
    <form className="flex flex-col items-center justify-center w-80" onSubmit={handleSubmit(onSubmitForm)}>
      <InputWithLabel
        label="아이디"
        register={register}
        name="userId"
        placeholder="아이디 입력 해 주세요"
        error={errors.userId && "ID는 3~10 글자로 입력해 주세요"}
        pattern={idPattern}
      />
      <InputWithLabel
        label="비밀번호"
        register={register}
        name="password"
        type="password"
        placeholder="비밀번호를 입력 해 주세요"
        error={errors.password && "영문(대소문자), 숫자, 특수 문자를 혼합하여 8자 이상 20자 이내로 입력해주세요."}
        pattern={passwordPattern}
      />
      <InputWithLabel
        label="비밀번호 확인"
        register={register}
        name="rePassword"
        type="password"
        placeholder="비밀번호를 입력 확인"
        error={watch("rePassword") !== watch("rePassword") && "비밀번호를 확인 해주세요"}
        pattern={passwordPattern}
      />
      <InputWithLabel
        label="이름"
        register={register}
        name="username"
        placeholder="이름을 입력 해 주세요"
        error={errors.username && "이름을 확인 해 주세요"}
      />
      <InputWithLabel
        label="닉네임"
        register={register}
        name="nickname"
        placeholder="닉네임을 입력 해 주세요"
        error={errors.nickname && "닉네임을 확인 해 주세요"}
      />
      <div className="w-full p-2">생년월일</div>
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
          {Object.values(genderType).map((gender) => (
            <GenderButton
              key={gender}
              gender={gender}
              isSelected={watch("gender") === gender}
              onClick={() => handleGenderSelection(gender)}
            />
          ))}
        </div>
      </div>
      <InputWithLabel
        label="휴대폰 번호"
        register={register}
        name="phoneNumber"
        placeholder="휴대폰번호를 입력 해 주세요"
        error={errors.phoneNumber && "010-XXXX-XXXX 형식으로 입력해주세요"}
        pattern={phoneNumberPattern}
      />
      <InputWithLabel
        label="이메일"
        register={register}
        name="email"
        type="email"
        placeholder="이메일을 입력 해 주세요"
        error={errors.email && "이메일을 확인해 주세요"}
        pattern={emailPattern}
      />
      <Button className={`mt-8 w-full`}>회원가입</Button>
    </form>
  )
}

export default SignForm
