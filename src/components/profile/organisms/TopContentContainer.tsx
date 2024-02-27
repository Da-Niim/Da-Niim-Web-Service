import ContentCountBox from "../molecules/ContentCountBox"

const myContents = [
  {
    id: 1,
    title: "Posts",
    count: 234,
  },
  {
    id: 2,
    title: "Travelogs",
    count: 23,
  },
  {
    id: 3,
    title: "Followers",
    count: 129,
  },
  {
    id: 4,
    title: "Following",
    count: 238,
  },
]

const TopContentContainer = () => {
  return (
    <div className="w-fit flex mx-auto md:mx-0">
      {/* <Image src={""} alt="image" width={140} height={140} /> */}
      <div className="w-36 h-36 rounded-full bg-slate-700"></div>
      <div className="ml-10 font-normal">
        <h1 className="text-xl text-gray-900">Nickname</h1>
        <p className="text-base mt-1 text-[#868B94]">안녕하세요 한마디로 시작되는 나의 트립</p>
        <div className="flex gap-8 mt-4">
          {myContents.map((content) => {
            return <ContentCountBox key={content.id} title={content.title} count={content.count} />
          })}
        </div>
      </div>
    </div>
  )
}

export default TopContentContainer
