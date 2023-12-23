import NextAuth, { NextAuthOptions } from "next-auth"
import NaverProvider from "next-auth/providers/naver"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      id: "Da-Niim",
      name: "Da-Niim",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("/localhost:8080/user/register", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        })
        const user = await res.json()

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // 내가 원하는 커스텀 sign-in 페이지의 url
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
