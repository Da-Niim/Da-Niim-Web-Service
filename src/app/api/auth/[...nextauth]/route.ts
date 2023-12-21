import NextAuth, { NextAuthOptions } from "next-auth"
import NaverProvider from "next-auth/providers/naver"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/auth/signin", // 내가 원하는 커스텀 sign-in 페이지의 url
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
