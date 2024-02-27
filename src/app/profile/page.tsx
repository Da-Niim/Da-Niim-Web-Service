import BottomContentContainer from "@components/profile/organisms/BottomContentContainer"
import TopContentContainer from "@components/profile/organisms/TopContentContainer"

const page = () => {
  return (
    <div className=" mx-auto">
      <div className="mx-auto lg:px-56 mt-20 w-full flex flex-col">
        <TopContentContainer />

        <BottomContentContainer />
      </div>
    </div>
  )
}

export default page
