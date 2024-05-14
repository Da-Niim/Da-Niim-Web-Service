"use client"
import React from "react"
import Button from "@components/common/Button"
import NaverLogo from "@assets/icons/NaverLogo.png"
import KakaoLogo from "@assets/icons/KakaoLogo.png"
import type { StaticImageData } from "next/image"

interface SocialSignInButtonProps {
  provider: string
  onClick: () => void
}

const SocialSignInButton: React.FC<SocialSignInButtonProps> = ({ provider, onClick }) => {
  let buttonText = ""
  let buttonColor = ""
  let buttonIcon: StaticImageData | undefined
  let fontColor = ""

  switch (provider) {
    case "kakao":
      buttonText = "Kakao 로그인"
      buttonColor = "#F7E317"
      buttonIcon = KakaoLogo
      fontColor = "#000000"
      break
    case "naver":
      buttonText = "Naver 로그인"
      buttonColor = "#03C75A"
      buttonIcon = NaverLogo
      break
    default:
      break
  }

  return (
    <div
      className="flex flex-col item-center justify-start w-full pb-4 h-16 rounded-xl"
      style={{ backgroundColor: buttonColor, color: fontColor }}
      onClick={onClick}
    >
      {buttonIcon && <img className="object-contain h-16 rounded-xl pb-2" src={buttonIcon.src} alt={buttonText} />}
    </div>
  )
}

export default SocialSignInButton
