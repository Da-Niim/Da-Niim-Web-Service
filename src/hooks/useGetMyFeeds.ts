import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "@utils/axios"

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
      const { data } = await axiosInstance.get("/feeds/profile")
      return data
    },
  })
}
