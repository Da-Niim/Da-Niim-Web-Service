import { axiosInstance } from "@utils/axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import KakaoProvider from "next-auth/providers/kakao"
import NaverProvider from "next-auth/providers/naver"

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
        if (!credentials) {
          return null
        }

        const { data } = await axiosInstance.post(
          "/auth/login",
          {},
          {
            auth: {
              username: credentials?.username,
              password: credentials?.password,
            },
          },
        )

        // const res = await fetch(`http://52.79.175.72:8080/auth/login`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     authorization: `Basic ${btoa(credentials?.username + ":" + credentials?.password)}`,
        //   },
        // })
        // const user = await res.json()

        // console.log(user)
        if (data) {
          return data
        } else {
          return null
        }
      },
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      return session
    },
    async redirect({ url, baseUrl }) {
      const basedUrl = "/login"
      return basedUrl
    },
  },
  pages: {
    signIn: "/login",
  },
})

export { handler as GET, handler as POST }
