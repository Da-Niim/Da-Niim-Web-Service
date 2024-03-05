"use client"
import { fetchData } from "@utils/api"
import FeedList from "@components/feed/FeedList"

import SubTab from "@components/feed/SubTab"
import Tab from "@components/feed/Tab"
import TravelList from "@components/feed/TravelList"

import { useEffect, useState } from "react"

function FeedPage() {
  const [activeTab, setActiveTab] = useState("feed")
  const [activeSubTab, setActiveSubTab] = useState("최신순")
  //TODO: constant data로 빼기 & enum 타입으로 선언
  const tabNames = ["최신순", "추천순", "인기순", "댓글많은순"]

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

  const fetchTabData = async (tabName: string, subTabName: string) => {
    try {
      // TODO: 데이터 받고 처리 필요
      const fetchedData = await fetchData(subTabName)
    } catch (error) {
      //TODO : 에러처리 필요
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
        {activeTab === "feed" && <FeedList initialData={[]} />}
        {/* {activeTab === "travel" && <TravelList data={initialData} />} */}
        {/* {activeTab === "feed" && <FeedList />} */}
        {activeTab === "travel" && <TravelList initialData={[]} />}
      </div>
    </div>
  )
}

export default FeedPage
