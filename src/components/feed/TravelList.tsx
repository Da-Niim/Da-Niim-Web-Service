import { FeedListProps } from "@utils/interface/feedListProps"

function TravelList({ initialData }: FeedListProps) {
  return (
    <div className="flex flex-col justify-center items-center w-screen ">
      {initialData.map((data) => (
        <div key={data.postId} className="flex flex-col items-start w-1/3">
          <div className="flex flex-row justify-start items-center flex-nowrap">
            <img src={data.userimg} alt="dummy userimage" />
            <div className="flex flex-col mt-4">
              <p className="font-bold">{data.username}</p>
              <p className="font-light">{data.address}</p>
            </div>
          </div>
          <img className="w-screen h-96" src={data.img} alt="Dummy Image" />
          <h2 className="mt-3">{data.title}</h2>
          <p className="mt-3">{data.main}</p>
          <p className="mt-3">{data.tag}</p>
          <div className="flex flex-row">
            <p className="">{data.heart}</p>
            <p className="ml-3">{data.comment}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TravelList
