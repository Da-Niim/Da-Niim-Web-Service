"use client"
import { useState } from "react"
import dynamic from "next/dynamic"

const ModalComponent = dynamic(() => import("../post/page"), { ssr: false })

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  // 버튼 클릭시 모달 버튼 클릭 유무를 설정하는 state 함수
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

      {/* 모달을 동적으로 렌더링합니다. */}

      {/* @ts-ignore */}
      {showModal && <ModalComponent clickModal={clickModal} />}
    </div>
  )
}
