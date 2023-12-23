import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../[...nextauth]/route"
import SocialSigninButton from "@/components/login/socialloginbutton"

export default async function SignInPage() {
  const session = await getServerSession(authOptions)
  if (session) {
    return { redirect: { destination: "/" } }
  }

  const providers = await getProviders()
  if (!providers) {
    console.error("프로바이더 정보를 가져올 수 없습니다.")
    return null // 또는 다른 처리 방법을 선택할 수 있습니다.
  }

  console.log(providers)

  return (
    <section>
      <SocialSigninButton providers={providers} />
      <h1>{`${providers}`}</h1>
    </section>
  )
}
