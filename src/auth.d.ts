import NextAuth, { DefaultSession, User } from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?:
      | ({
          id?: string | unknown
        } & DefaultSession["user"])
      | unknown
    accessToken?: string | unknown
  }
}
