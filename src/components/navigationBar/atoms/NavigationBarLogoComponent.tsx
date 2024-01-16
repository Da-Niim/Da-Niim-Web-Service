import Image from "next/image"
import Link from "next/link"
import React from "react"

const NavigationBarLogoComponent: React.FC = () => {
  return (
    <Link href="/" as={"image"}>
      <div className="flex items-center justify-center w-full h-auto cursor-pointer">
        <Image
          src="/assets/images/logo.png"
          style={{ width: "100%", height: "auto" }}
          priority={true}
          width={100}
          height={20}
          alt="logo"
        />
      </div>
    </Link>
  )
}

export default NavigationBarLogoComponent
