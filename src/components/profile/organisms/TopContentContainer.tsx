"use client"
import Loading from "@app/loading"
import { useGetProfile } from "@hooks/useGetProfile"
import ContentCountBox from "../molecules/ContentCountBox"

const TopContentContainer = () => {
  const { data, isLoading } = useGetProfile()
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    )
  return (
    <div className="w-fit flex mx-auto md:mx-0">
      {/* <Image src={""} alt="image" width={140} height={140} /> */}
      <div className="w-36 h-36 rounded-full bg-slate-700"></div>
      <div className="ml-10 font-normal">
        <h1 className="text-xl text-gray-900">{data?.name}</h1>
        <p className="text-base mt-1 text-[#868B94]">{data?.intro ? data?.intro : "-"}</p>
        <div className="flex gap-8 mt-4">
          <ContentCountBox title={"Posts"} count={data?.postCount!} />
          <ContentCountBox title={"Travelogs"} count={data?.travelogCount!} />
          <ContentCountBox title={"Followers"} count={data?.followerCount!} />
          <ContentCountBox title={"Following"} count={data?.followingCount!} />
        </div>
      </div>
    </div>
  )
}

export default TopContentContainer
