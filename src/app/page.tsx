import MainKoreaMapContainer from "@/components/main/organisms/MainKoreaMapContainer"
import Image from "next/image"
import Join from "@app/join/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <MainKoreaMapContainer />
    </main>
  )
}
