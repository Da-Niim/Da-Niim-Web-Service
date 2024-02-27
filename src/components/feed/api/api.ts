import { axiosInstance } from "@utils/axios"

export default async function fetchData(subTab: string) {
  try {
    const response = await axiosInstance.get(`/feeds?subTab=${subTab}`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${}`,
      },
    })

    const { data } = response

    return data
  } catch (error) {
    return null
  }
}
