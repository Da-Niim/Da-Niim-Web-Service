import TopContentContainer from "@components/profile/organisms/TopContentContainer"

const page = () => {
  return (
    <div className="container mx-auto px-56">
      <div className="mt-20 w-4/6 flex flex-col">
        {/* profile top content start */}
        <TopContentContainer />
        {/* profile top content end */}
      </div>
    </div>
  )
}

export default page
