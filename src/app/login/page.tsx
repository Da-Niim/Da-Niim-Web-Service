"use client"
import Button from "@components/common/Button"
import { getProviders, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
// const classNameStyle = {
//   input: [
//     "bg-input-bg-color",
//     "text-black/90 dark:text-white/90",
//     "placeholder:text-default-700 dark:placeholder:text-white/60",
//     "justify-between",
//     "w-full",
//     "border-2",
//     "border-[#b9b9b9]",
//     "focus:outline-borderline",
//     "pl-3",
//     "mb-4",
//     "mt-3",
//   ],
//   inputWrapper: [
//     "bg-default-200/50",
//     "dark:bg-default/60",
//     "backdrop-saturate-200",
//     "hover:bg-default-200/70",
//     "dark:hover:bg-default/70",
//     "group-data-[focused=true]:bg-default-200/50",
//     "dark:group-data-[focused=true]:bg-default/60",
//     "!cursor-text",
//     "mb-2",
//   ],
// }

// export default classNameStyle

// TODO: ussForm 적용
function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [rememberUsername, setRememberUsername] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [username, setUsername] = useState("")

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const savedUsername = localStorage.getItem("savedUsername")
    if (savedUsername) {
      setUsername(savedUsername)
      setRememberUsername(true)
    }
    ;(async () => {
      const res: any = await getProviders()
      setProviders(res)
    })()
  }, [])

  const router = useRouter()
  // TODO: Custom Hooks로 빼기

  const handleSubmit = async () => {
    const result = await signIn("credentials", {
      username: emailRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: "basedUrl",
    })
  }
  const handleKakao = async () => {
    const result = await signIn("kakao", {
      redirect: true,
      callbackUrl: "basedUrl",
    })
  }

  const handleRememberUsername = () => {
    // TODO:  체크 해제시에만 제거
    localStorage.removeItem("savedUsername")
  }
  // TODO: ClassName => Tailwind css
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col  justify-center h-full">
        <label className="pl-2px pb-1">Da-Niim 에 로그인 </label>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col w-80">
            <input
              ref={emailRef}
              onChange={(e: any) => {
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
          <div className="flex flex-col  w-80">
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              onChange={(e: any) => (passwordRef.current = e.target.value)}
            />
          </div>
        </div>
        <Button onClick={handleSubmit}>로그인</Button>
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
      <div>
        <button
          className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          onClick={() => signIn("kakao", { redirect: false, callbackUrl: "/" })}
        >
          kakao login
        </button>
      </div>
      <button
        className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
        onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}
      >
        naver login
      </button>
    </div>
  )
}

export default LoginPage
