"use client"
import dynamic from "next/dynamic"
import { useState } from "react"

const ModalComponent = dynamic(() => import("../../components/feed/post/page"), { ssr: false })

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const clickModal = () => setShowModal(!showModal)
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a onClick={clickModal}>Open Modal</a>
          </li>
        </ul>
      </nav>
      {showModal && <ModalComponent clickModal={clickModal} />}
    </div>
  )
}
