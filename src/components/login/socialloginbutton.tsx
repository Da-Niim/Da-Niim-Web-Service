"use client"

import { ClientSafeProvider, signIn } from "next-auth/react"

type IProps = {
  providers: Record<string, ClientSafeProvider>
}

export default function SocialSigninButton({ providers }: IProps) {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="m-4 bg-slate-200">
          <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
        </div>
      ))}
    </div>
  )
}
