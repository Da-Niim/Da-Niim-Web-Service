const imageUrl =
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const page = () => {
  return (
    <div className="container mx-auto px-56">
      <div className="mt-20 w-4/6 flex">
        {/* profile top content start */}
        <div className="w-fit flex">
          {/* <Image src={""} alt="image" width={140} height={140} /> */}
          <div className="w-36 h-36 rounded-full bg-slate-700"></div>
          <div className="ml-10 font-normal">
            <h1 className="text-xl text-gray-900">Nickname</h1>
            <p className="text-base mt-1 text-[#868B94]">안녕하세요 한마디로 시작되는 나의 트립</p>
            <div className="flex gap-8 mt-4">
              <div className="flex flex-col text-gray-900 text-center">
                <div className="text-sm">Posts</div>
                <div className="mt-1 text-lg font-bold">234</div>
              </div>
              <div className="flex flex-col text-gray-900 text-center">
                <div className="text-sm">Travelogs</div>
                <div className="mt-1 text-lg font-bold">23</div>
              </div>
              <div className="flex flex-col text-gray-900 text-center">
                <div className="text-sm">Followers</div>
                <div className="mt-1 text-lg font-bold">129</div>
              </div>
              <div className="flex flex-col text-gray-900 text-center">
                <div className="text-sm">Following</div>
                <div className="mt-1 text-lg font-bold">238</div>
              </div>
            </div>
          </div>
        </div>
        {/* profile top content end */}
      </div>
    </div>
  )
}

export default page
