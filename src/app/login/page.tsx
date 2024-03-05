"use client"
import { Input } from "@nextui-org/react"
import { axiosInstance } from "@utils/axios"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"

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

  const router = useRouter()
  // TODO: Custom Hooks로 빼기
  useEffect(() => {
    const savedUsername = localStorage.getItem("savedUsername")
    if (savedUsername) {
      setUsername(savedUsername)
      setRememberUsername(true)
    }
  }, [])


  // const handleSubmit = async () => {

  //   const result = await signIn("credentials", {
  //     username: emailRef.current,
  //     password: passwordRef.current,
  //     redirect: true,
  //     callbackUrl: "/",
  //   });
  // }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const username: string = (e.target as HTMLFormElement).username.value
    const password: string = (e.target as HTMLFormElement).password.value


    try {
      const response = await axiosInstance.post("/auth/login",{}, {
        auth: {
          username,
          password,
        },
      })
      console.log(response.data)
      if (response.data) {
        //TODO: Storage 저장
        if (rememberUsername) {
          localStorage.setItem("savedUsername", username)
        }
        router.push("/")
      }
    } catch (error) {
      // TODO : Modal창이나 다른 에러처리 필요
      setError("아이디 또는 비밀번호가 올바르지 않습니다.")
      console.error("로그인 실패:", error)
    }
  }

  const handleRememberUsername = () => {
    // TODO:  체크 해제시에만 제거
    localStorage.removeItem("savedUsername")
  }
  // TODO: ClassName => Tailwind css
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col  justify-center h-full">
        <label className="pl-2px pb-1">Da-Niim 에 로그인 </label>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col w-80">
            <Input type="text" name="username" placeholder="Enter your ID" />
          </div>
        </div>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col  w-80">
            <Input type="password" name="password" placeholder="Enter your Password" />
          </div>
        </div>
        <button type="submit" className="bg-submit-bg-color text-white w-80 h-12 my-5">
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
