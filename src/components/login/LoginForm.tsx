"use client"
import Button from "@components/common/Button"
import InputWithLabel from "@components/signUp/InputWithLabel"
import { signIn, signOut } from "next-auth/react"
import { FieldValue, FieldValues, useForm } from "react-hook-form"
import SocialSignInButton from "./socialSignInButton"

// TODO: 로그인 리프레쉬 토큰 로직 구현 ( 로그인 상태 유지 )
const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: FieldValues) => {
    const result = await signIn("credentials", {
      username: data.id,
      password: data.password,
      redirect: true,
      callbackUrl: "basedUrl",
    })
  }

  const handleKakaoSignIn = async () => {
    await signIn("kakao", { redirect: false, callbackUrl: "/" })
  }

  const handleNaverSignIn = async () => {
    await signIn("naver", { redirect: true, callbackUrl: "/" })
  }

  return (
    <form className="flex flex-col items-center justify-center h-full w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center h-full pb-2">
        <label className="pl-2px pb-1">Da-Niim 에 로그인 </label>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col w-80">
            <InputWithLabel label="아이디" name="id" register={register} placeholder="아이디 입력 해 주세요" />
          </div>
        </div>
        <div className="flex flex-col my-5 w-80">
          <div className="flex flex-col w-80">
            <InputWithLabel
              label="비밀번호"
              register={register}
              name="password"
              type="password"
              placeholder="비밀번호를 입력 해 주세요"
            />
          </div>
        </div>
        <Button className="w-[100%] pb-2">로그인</Button>
      </div>
      <div className="flex flex-col item-center justify-center w-80 pb-2">
        <SocialSignInButton provider={"kakao"} onClick={handleKakaoSignIn} />
        <SocialSignInButton provider={"naver"} onClick={handleNaverSignIn} />
      </div>
      <div className="flex flex-col item-center justify-center w-80">
        <Button className="w-full transform" onClick={() => signOut()}>
          SignOut
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
