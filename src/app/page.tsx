import MainKoreaMapContainer from "@/components/main/organisms/MainKoreaMapContainer"
import Join from "@app/sign/page"
import GlobalNavigationBar from "@components/navigationBar/templates/GlobalNavigationBar"

export default function MainPage() {
  return (
    <main>
      <div className="flex flex-col min-h-screen">
        <GlobalNavigationBar />
        <div className="flex flex-col items-center justify-center p-24">
          <MainKoreaMapContainer />
        </div>
      </div>
    </main>
  )
}
