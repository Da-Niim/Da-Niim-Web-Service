"use client"
import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  modal?: ReactNode
}

const queryClient = new QueryClient()
function Providers({ children, modal }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        {children}
        {modal}
      </SessionProvider>
    </QueryClientProvider>
  )
}

export default Providers
