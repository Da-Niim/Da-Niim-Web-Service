import MainKoreaMapContainer from "@/components/main/organisms/MainKoreaMapContainer"

export default function MainPage() {
  return (
    <div className=" flex flex-col w-full">
      <div className="flex flex-col h-full items-center justify-center ">
        <MainKoreaMapContainer />
      </div>
    </div>
  )
}
