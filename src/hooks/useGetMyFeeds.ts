import { useQuery } from "@tanstack/react-query"
import { axiosClientInstance } from "@utils/axios"

interface GetMyFeedsProps {
  page: number
  size: number
  totalElements: number
  totalPage: number
  data: {
    id: string
    photoUrl: string
    likeCount: number
    commentCount: number
  }[]
}

export const useGetMyFeeds = () => {
  return useQuery<GetMyFeedsProps>({
    queryKey: ["my-feeds"],
    queryFn: async () => {
      const { data } = await axiosClientInstance.get("/feeds/profile")
      return data
    },
  })
}
