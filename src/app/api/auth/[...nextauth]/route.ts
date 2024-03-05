import NextAuth, { NextAuthOptions } from "next-auth"
import NaverProvider from "next-auth/providers/naver"
import CredentialsProvider from "next-auth/providers/credentials"
import { Basic } from "next/font/google"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Da-Niim",
      credentials: {
        username: {
          label: "이메일",
          type: "text",
          placeholder: "이메일 주소 입력 요망",
        },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        })
        const user = await res.json()
        console.log(user)
        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
})

export { handler as GET, handler as POST }
