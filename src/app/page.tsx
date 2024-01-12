import MainKoreaMapContainer from "@/components/main/organisms/MainKoreaMapContainer"
import GlobalNavigationBar from "@components/navigationBar/templates/GlobalNavigationBar"

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center p-24">
        <MainKoreaMapContainer />
      </div>
    </div>
  )
}
