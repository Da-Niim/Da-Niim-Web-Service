"use client"
import { ClassNames } from "@emotion/react"
import { signIn } from "next-auth/react"
import { FormEvent, useState, useEffect } from "react"
import { classNamestyle } from "@app/sign/page"
import { Input } from "@nextui-org/react"
import axios from "axios"

function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [rememberUsername, setRememberUsername] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [username, setUsername] = useState("")

  useEffect(() => {
    const savedUsername = localStorage.getItem("savedUsername")
    if (savedUsername) {
      setUsername(savedUsername)
      setRememberUsername(true) // 저장된 아이디가 있을 때, 아이디 저장 체크박스 체크 상태 변경
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (username !== "") {
      const userId = username
    }
    const userId: string = (e.target as HTMLFormElement).username.value
    const password: string = (e.target as HTMLFormElement).password.value
    const basicAuthHeader = `Basic ${btoa(`${userId}:${password}`)}` // 사용자 아이디와 비밀번호를 base64로 인코딩하여 생성
    try {
      const formData = { userId, password }
      console.log(formData)
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: basicAuthHeader,
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // 데이터가 성공적으로 전송된 경우 처리할 내용
        console.log("데이터가 성공적으로 전송되었습니다.")
        // window.location.href = "/" // 홈으로 이동하는 부분
        const responseData = await response.json()
        console.log("서버 응답 데이터:", responseData)
      } else {
        // 서버에서 오류 응답을 받은 경우 처리할 내용
        const errorResponse = await response.json()
        const errorMessage = errorResponse.detail.message // 배열 형식의 메시지를 문자열로 변환
        console.error("서버 오류: ", errorMessage)
      }
      if (rememberMe) {
        document.cookie = "rememberMe=true; max-age=3600"
      }

      if (rememberUsername) {
        localStorage.setItem("savedUsername", username)
      } else {
        localStorage.removeItem("savedUsername")
      }
    } catch (error) {
      setError("아이디 또는 비밀번호가 올바르지 않습니다.")
      console.error("로그인 실패:", error)
    }
  }

  const handleRememberUsername = () => {
    if (rememberUsername) {
      localStorage.setItem("savedUsername", username)
    } else {
      localStorage.removeItem("savedUsername")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col  justify-center h-full">
        <label className="pl-2px pb-1">Da-Niim 에 로그인 </label>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col  w-80">
            <Input type="text" name="username" placeholder="Enter your ID" classNames={classNamestyle} />
          </div>
        </div>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col  w-80">
            <Input type="password" name="password" placeholder="Enter your Password" classNames={classNamestyle} />
          </div>
        </div>
        <button type="submit" className="bg-submit-bg-color text-white w-80 h-12  my-5">
          로그인
        </button>
        <div className="flex flex-row w-80">
          <div className="flex flex-row my-5 w-80">
            <input
              type="checkbox"
              checked={rememberUsername}
              onChange={(e) => {
                setRememberUsername(e.target.checked)
                if (!e.target.checked) {
                  setRememberMe(false)
                }
              }}
            />
            <label className="ml-2">로그인 상태 유지</label>
          </div>
          <div className="flex flex-row my-5 w-80">
            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            <label className="ml-2">아이디 저장</label>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LoginPage
