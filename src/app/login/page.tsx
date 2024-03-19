"use client"
import Button from "@components/common/Button"
import Input from "@components/common/Input"
import { getProviders, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

// TODO: 로그인 리프레쉬 토큰 로직 구현 ( 로그인 상태 유지 )
function LoginPage() {
  const [rememberUsername, setRememberUsername] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [username, setUsername] = useState("")

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  useEffect(() => {
    const savedUsername = localStorage.getItem("savedUsername")
    if (savedUsername) {
      setUsername(savedUsername)
      setRememberUsername(true)
    }
  }, [])

  const router = useRouter()
  const handleSubmit = async () => {
    const result = await signIn("credentials", {
      username: emailRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: "basedUrl",
    })
  }
  // TODO: 유저 아이디 기억 저장 로직 구현
  const handleRememberUsername = () => {
    if (username) {
      localStorage.removeItem("savedUsername")
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex flex-col  justify-center h-full">
        <label className="pl-2px pb-1">Da-Niim 에 로그인 </label>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col w-80">
            <input
              ref={emailRef}
              onChange={(e: any) => {
                e.preventDefault()
                emailRef.current = e.target.value
              }}
              id="email"
              name="email"
              type="email"
              required
              autoFocus={true}
            />
          </div>
        </div>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col w-80">
            <input
              ref={passwordRef}
              onChange={(e: any) => {
                e.preventDefault()
                passwordRef.current = e.target.value
              }}
              type="password"
              id="password"
              name="password"
            />
          </div>
        </div>
        <Button onClick={handleSubmit}>로그인</Button>
        <div className="flex flex-row w-80">
          <div className="flex flex-row my-5 w-80">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => {
                setRememberMe(e.target.checked)
                if (!e.target.checked) {
                  setRememberMe(false)
                }
              }}
            />
            <label className="ml-2">로그인 상태 유지</label>
          </div>
          <div className="flex flex-row my-5 w-80">
            <input type="checkbox" checked={rememberUsername} onChange={(e) => setRememberUsername(e.target.checked)} />
            <label className="ml-2">아이디 저장</label>
          </div>
        </div>
      </div>
      <div>
        <button
          className="w-[50%] transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          onClick={() => signIn("kakao", { redirect: false, callbackUrl: "/" })}
        >
          kakao login
        </button>

        <button
          className="w-[50%] transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}
        >
          naver login
        </button>
        <button
          className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          onClick={() => signOut()}
        >
          SignOut
        </button>
      </div>
    </div>
  )
}

export default LoginPage
