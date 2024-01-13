import MainKoreaMapContainer from "@/components/main/organisms/MainKoreaMapContainer"

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col items-center justify-center p-20">
        <MainKoreaMapContainer />
      </div>
    </div>
  )
}
