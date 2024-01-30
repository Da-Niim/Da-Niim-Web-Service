"use client"
import React from "react"
import SignForm from "./Form/SignForm"

const Sign: React.FC = () => {
  return (
    <div className="flex justify-center w-screen h-screen absolute">
      <SignForm />
    </div>
  )
}

export default Sign
