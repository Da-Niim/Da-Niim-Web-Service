"use client"
import Button from "@components/common/Button"
import Input from "@components/common/Input"
import { signIn, signOut } from "next-auth/react"
import { useForm } from "react-hook-form"

// TODO: 로그인 리프레쉬 토큰 로직 구현 ( 로그인 상태 유지 )
const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: any) => {
    const result = await signIn("credentials", {
      username: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "basedUrl",
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex flex-col justify-center h-full">
        <label className="pl-2px pb-1">Da-Niim 에 로그인 </label>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col w-80">
            <Input
              {...register("email", { required: true })}
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
            <Input {...register("password", { required: true })} type="password" id="password" name="password" />
          </div>
        </div>
        <Button className="w-[100%]" onClick={handleSubmit(onSubmit)}>
          로그인
        </Button>
      </div>
      <div>
        <Button className="w-[50%] transform" onClick={() => signIn("kakao", { redirect: false, callbackUrl: "/" })}>
          Kakao 로그인
        </Button>
        <Button className="w-[50%] transform" onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}>
          Naver 로그인
        </Button>
        <Button className="w-full transform" onClick={() => signOut()}>
          SignOut
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
