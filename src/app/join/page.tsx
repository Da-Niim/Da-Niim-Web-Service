"use client"
import React, { useRef, useState } from "react"
import { css } from "@emotion/react"
import { Input, Autocomplete, AutocompleteSection, AutocompleteItem } from "@nextui-org/react"
import { useForm, Control, Controller } from "react-hook-form"
interface IForm {
  username: string
  userId: string
  password: string
  repassword: string
  email: string
  phoneNumber: string
  gender: ""
  birthDate: ""
}
const classNamestyle = {
  input: [
    "bg-input-bg-color",
    "text-black/90 dark:text-white/90",
    "placeholder:text-default-700 dark:placeholder:text-white/60",
    "justify-between",
    "w-full",
    "h-full",
    "border-2",
    "border-[#b9b9b9]",
    "focus:outline-borderline",
    "pl-3",
  ],
  inputWrapper: [
    "bg-default-200/50",
    "dark:bg-default/60",
    "backdrop-blur-xl",
    "backdrop-saturate-200",
    "hover:bg-default-200/70",
    "dark:hover:bg-default/70",
    "group-data-[focused=true]:bg-default-200/50",
    "dark:group-data-[focused=true]:bg-default/60",
    "!cursor-text",
    "h-12",
  ],
}

const Join: React.FC = () => {
  const yearRef = useRef<HTMLSelectElement>(null)
  const monthRef = useRef<HTMLSelectElement>(null)
  const dayRef = useRef<HTMLSelectElement>(null)
  const formatNumber = (value: number) => (value < 10 ? `0${value}` : String(value))

  const createBirthDate = () => {
    const selectedYear = yearRef.current?.value || "" // 기본값으로 현재 년도를 설정하거나 원하는 기본값 설정 가능
    const selectedMonth = monthRef.current?.value || "" // 기본값으로 1월을 설정하거나 원하는 기본값 설정 가능
    const selectedDay = dayRef.current?.value || "" // 기본값으로 1일을 설정하거나 원하는 기본값 설정 가능

    return `${selectedYear}-${formatNumber(Number(selectedMonth))}-${formatNumber(Number(selectedDay))}`
  }
  const [selectedGender, setSelectedGender] = useState<"MALE" | "FEMALE" | null>(null)

  const handleGenderSelection = (gender: "MALE" | "FEMALE") => {
    setSelectedGender(gender)
  }

  const initialYears = Array.from({ length: 104 }, (_, index) => {
    const year: number = new Date().getFullYear() - index
    return { label: String(year), value: String(year) }
  })

  const initialMonths = Array.from({ length: 12 }, (_, index) => {
    const month: number = index + 1
    return { label: String(month), value: String(month) }
  })

  const initialDays = Array.from({ length: 31 }, (_, index) => {
    const day: number = index + 1
    return { label: String(day), value: String(day) }
  })

  const handleYearChange = () => {
    const selectedYear = yearRef.current?.value
    // 선택된 연도 값(selectedYear) 사용
  }

  const handleMonthChange = () => {
    const selectedMonth = monthRef.current?.value
    // 선택된 월 값(selectedMonth) 사용
  }

  const handleDayChange = () => {
    const selectedDay = dayRef.current?.value
    // 선택된 일 값(selectedDay) 사용
  }
  const {
    control,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onBlur",
    defaultValues: {
      username: "",
      userId: "",
      password: "",
      repassword: "",
      email: "",
      phoneNumber: "",
    },
  })
  const { username, userId, password, repassword, email, phoneNumber } = watch() // 각 필드의 값을 가져옵니다.

  // 유효성 검사를 통과했고, 각 필드가 비어있지 않을 때 버튼을 활성화합니다.
  const isFormValid =
    Object.keys(errors).length === 0 &&
    username !== "" &&
    userId !== "" &&
    password !== "" &&
    repassword !== "" &&
    email !== "" &&
    phoneNumber.length === 13 &&
    yearRef.current?.value !== "" &&
    monthRef.current?.value !== "" &&
    dayRef.current?.value !== "" &&
    (selectedGender === "MALE" || selectedGender === "FEMALE") &&
    selectedGender !== null

  const onSubmitForm = async () => {
    if (isFormValid) {
      // 여기에 폼 제출 로직을 실행하세요
      const formData = {
        userId,
        email,
        password,
        phoneNumber,
        gender: selectedGender,
        username,
        birthDate: createBirthDate(),
      }
      try {
        const response = await fetch("http://localhost:8080/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          // 데이터가 성공적으로 전송된 경우 처리할 내용
          console.log("데이터가 성공적으로 전송되었습니다.")
        } else {
          // 서버에서 오류 응답을 받은 경우 처리할 내용
          const errorResponse = await response.json()
          const errorMessage = errorResponse.detail.message.join(", ") // 배열 형식의 메시지를 문자열로 변환
          console.error("서버 오류: ", errorMessage)
        }
      } catch (error) {
        // 네트워크 오류 등 예외가 발생한 경우 처리할 내용
        console.error("데이터 전송 중 오류가 발생했습니다: ", error)
      }
    }
  }
  const phoneMask = (value: string) => {
    const clearValue = value.replace(/[^0-9]/g, "") // 숫자 이외의 문자 제거
    const match = clearValue.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/) // 패턴에 맞게 분리

    if (match) {
      const formattedValue = match
        .slice(1)
        .filter((group) => group !== "")
        .join("-") // 하이픈으로 합치기
      return formattedValue
    }

    return value // 일치하는 패턴이 없을 경우 기존 값 반환
  }

  return (
    <form className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col my-5 w-80 h-20">
        <label className="pl-2px pb-1">아이디 </label>
        <div className="flex flex-col  w-80 h-20">
          <Controller
            control={control}
            name="userId"
            rules={{
              maxLength: { value: 10, message: "최대 10글자 입력이 가능합니다." },
              minLength: { value: 3, message: "3글자 이상 입력해주세요." },
              // pattern: {
              //   value: /^[A-Za-z0-9]+$/,
              //   message: "영문과 숫자의 조합만 입력 가능합니다.",
              // },
            }}
            render={({ field }) => (
              <Input
                {...field}
                radius="full"
                isRequired
                variant="bordered"
                placeholder="Enter your ID"
                classNames={classNamestyle}
              />
            )}
          />
          {errors.userId ? <p className="error">{errors.userId?.message}</p> : null}
        </div>
      </div>
      <div className="flex flex-col my-5 w-80">
        <label className="pl-2px pb-1">비밀번호 </label>
        <div className="flex flex-col  w-80">
          <Controller
            control={control}
            name="password"
            rules={{
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                message: "영문(대소문자), 숫자, 특수 문자를 혼합하여 8자 이상 20자 이내로 입력해주세요.",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                radius="full"
                isRequired
                variant="bordered"
                placeholder="Enter your Password"
                classNames={classNamestyle}
              />
            )}
          />
          {errors.password ? <p className="error">{errors.password?.message}</p> : null}
        </div>
      </div>
      <div className="flex flex-col my-5 w-80">
        <label className="pl-2px pb-1">비밀번호 확인 </label>
        <div className="flex flex-col  w-80">
          <Controller
            control={control}
            name="repassword"
            rules={{
              validate: (value) => value === watch("password") || "비밀번호가 서로 일치하지 않습니다.",
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                radius="full"
                isRequired
                variant="bordered"
                placeholder="Enter your Password"
                classNames={classNamestyle}
              />
            )}
          />
          {errors.repassword ? <p className="error">{errors.repassword?.message}</p> : null}
        </div>
      </div>
      <div className="flex flex-col my-5 w-80 h-20">
        <label className="pl-2px pb-1">이름 </label>
        <div className="flex flex-col  w-80 h-20">
          <Controller
            control={control}
            name="username"
            rules={{
              maxLength: { value: 10, message: "최대 10글자 입력이 가능합니다." },
              minLength: { value: 2, message: "2글자 이상 입력해주세요." },
              pattern: {
                value: /^[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]+$/,
                message: "특수 문자는 입력할 수 없습니다.",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                radius="full"
                isRequired
                variant="bordered"
                classNames={classNamestyle}
                placeholder="Enter your Name"
              />
            )}
          />
          {errors.username ? <p className="error">{errors.username?.message}</p> : null}
        </div>
      </div>
      <div className="flex flex-col w-80 h-20 ">
        <label className="pl-2px pb-1">생년월일 </label>
        <div className="flex flex-row w-80 h-20 justify-between items-center">
          <div className="flex flex-row w-full justify-around items-center">
            <select className="flex border-2 border-[#b9b9b9]" ref={yearRef} onChange={handleYearChange}>
              {initialYears.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
            <label className="pl-2px pb-1 ml-3">년</label>
          </div>
          <div className="flex flex-row w-full justify-around items-center ml-3">
            <select className="border-2 border-[#b9b9b9]" ref={monthRef} onChange={handleMonthChange}>
              {initialMonths.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
            <label className="pl-2px pb-1 ml-3">월</label>
          </div>
          <div className="flex flex-row w-full justify-around items-center ml-3">
            <select className="border-2 border-[#b9b9b9]" ref={dayRef} onChange={handleDayChange}>
              {initialDays.map((day) => (
                <option key={day.value} value={day.value}>
                  {day.label}
                </option>
              ))}
            </select>
            <label className="pl-2px pb-1 ml-3">일</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-5 w-80">
        <label className="pl-2px pb-1">성별 </label>
        <div className="flex flex-row justify-between  w-80 mt-2">
          <button
            className={`gender-btn w-28 h-10 ${selectedGender === "MALE" ? "selected" : ""} `}
            onClick={() => handleGenderSelection("MALE")}
            style={{
              backgroundColor: selectedGender === "MALE" ? "#d2b48c" : "#ebebeb",
              color: selectedGender === "MALE" ? "#000000" : "#b49264",
            }}
          >
            남성
          </button>
          <button
            className={`gender-btn w-28 h-10 ${selectedGender === "FEMALE" ? "selected" : ""}`}
            onClick={() => handleGenderSelection("FEMALE")}
            style={{
              backgroundColor: selectedGender === "FEMALE" ? "#d2b48c" : "#ebebeb",
              color: selectedGender === "FEMALE" ? "#000000" : "#b49264",
            }}
          >
            여성
          </button>
        </div>
      </div>

      <div className="flex flex-col my-5 w-80">
        <label className="pl-2px pb-1">이메일 </label>
        <div className="flex flex-col  w-80">
          <Controller
            control={control}
            name="email"
            rules={{
              pattern: {
                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "이메일 형식에 맞지 않습니다.",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                radius="full"
                isRequired
                variant="bordered"
                placeholder="Enter your E-mail"
                classNames={classNamestyle}
              />
            )}
          />
          {errors.email ? <p className="error">{errors.email?.message}</p> : null}
        </div>
      </div>
      <div className="flex flex-col my-5 w-80">
        <label className="pl-2px pb-1">핸드폰 </label>
        <div className="flex flex-col  w-80">
          <Controller
            control={control}
            name="phoneNumber"
            rules={{
              maxLength: { value: 13, message: "최대 11글자 입력이 가능합니다." },
              pattern: {
                value: /^010-\d{4}-\d{4}$/,
                message: "핸드폰 번호 형식에 맞게 입력해야 합니다",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                radius="full"
                isRequired
                variant="bordered"
                placeholder="Enter your Phone Number"
                classNames={classNamestyle}
                onChange={(e) => {
                  const maskedValue = phoneMask(e.target.value)
                  field.onChange(maskedValue)
                }}
              />
            )}
          />
          {errors.phoneNumber ? <p className="error">{errors.phoneNumber?.message}</p> : null}
        </div>
      </div>
      <button
        type="button"
        onClick={onSubmitForm}
        className={`bg-submit-bg-color text-white w-80 h-12  my-5 ${
          isFormValid ? "" : "cursor-not-allowed opacity-50"
        }`}
        disabled={!isFormValid}
      >
        회원가입
      </button>
    </form>
  )
}
export default Join
