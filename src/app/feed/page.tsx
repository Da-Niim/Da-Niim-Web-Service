"use client"
import Tab from "../../components/feed/tab"
import SubTab from "../../components/feed/subtab"
import FeedList from "../../components/feed/feedlist"
import TravelList from "../../components/feed/travellist"
import { useState, useEffect } from "react"
import { fetchData } from "@/components/feed/api"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

function FeedPage({ initialData }: { initialData: any[] }) {
  const [activeTab, setActiveTab] = useState("feed")
  const [activeSubTab, setActiveSubTab] = useState("최신순")
  const [data, setData] = useState([])
  const tabNames = ["최신순", "추천순", "인기순", "댓글많은순"]
  const router = useRouter()
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName)
    fetchTabData(tabName, activeSubTab)
  }

  const handleSubTabClick = (subTabName: string) => {
    setActiveSubTab(subTabName)
    fetchTabData(activeTab, subTabName)
  }

  useEffect(() => {
    fetchTabData(activeTab, activeSubTab)
  }, [])
  const accessToken = Cookies.get("accessToken")
  const fetchTabData = async (tabName: string, subTabName: string) => {
    try {
      const url = "http://localhost:8080/feeds"
      if (!accessToken) {
        // accessToken이 없는 경우 처리
        console.error(
          "AccessToken이 없습니다. 사용자를 로그인 페이지로 리다이렉트하거나 인증이 필요한 메시지를 표시하세요.",
        )
        return
      }
      const fetchedData = await fetchData(url, subTabName, accessToken)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <div className="flex flex-col items-center w-screen h-screen absolute">
      <div className="flex mt-12 place-content-between w-1/6">
        <Tab active={activeTab === "feed"} onClick={() => handleTabClick("feed")} name="게시글" />
        <Tab active={activeTab === "travel"} onClick={() => handleTabClick("travel")} name="여행기" />
      </div>
      <SubTab activeSubTab={activeSubTab} handleSubTabClick={handleSubTabClick} tabNames={tabNames} />
      <div>
        {activeTab === "feed" && <FeedList initialData={data} />}
        {/* {activeTab === "travel" && <TravelList data={initialData} />} */}
        {/* {activeTab === "feed" && <FeedList />} */}
        {activeTab === "travel" && <TravelList initialData={data} />}
      </div>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const url = "http://localhost:8080/??????"

//   const initialData = await fetchData(url)

//   return {
//     props: {
//       initialData,
//     },
//   }
// }

export default FeedPage
