import { useQuery } from "@tanstack/react-query"
import { axiosClientInstance } from "@utils/axios"

interface GetProfile {
  followerCount: number
  followingCount: number
  intro: null | string
  name: string
  postCount: number
  profileUrl: null | string
  travelogCount: number
}

export const useGetProfile = () => {
  const { data, isLoading } = useQuery<GetProfile>({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await axiosClientInstance.get("/user/me/info/profile")
      return data
    },
  })
  return { data, isLoading }
}
