"use client"
import NavigationBarLogoComponent from "@components/navigationBar/atoms/NavigationBarLogoComponent"
import { HEADER_NAVIGATION_BAR_LIST } from "@components/navigationBar/constant"
import NavigationButtonContainer from "@components/navigationBar/organisms/HeaderNavigationButtonContainer"
import HeaderSearchComponent from "@components/navigationBar/organisms/HeaderSearchComponent"
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function HeaderNavigationBar() {
  const { data } = useSession()

  return (
    <div className="w-full flex items-center py-8 border border-solid border-bottom-[#D7D7D7] justify-between px-[3vw]">
      <NavigationBarLogoComponent />

      <HeaderSearchComponent />
      <div className="hidden lg:flex">
        {!data ? (
          <div className="flex gap-1">
            <Link href="/login">로그인</Link>
            <p>/</p>
            <Link href="/signup">회원가입</Link>
          </div>
        ) : (
          <NavigationButtonContainer buttonList={HEADER_NAVIGATION_BAR_LIST} />
        )}
      </div>
    </div>
  )
}
