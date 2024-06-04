import { axiosClientInstance } from "@utils/axios"

export default async function fetchData(subTab: string) {
  try {
    const response = await axiosClientInstance.get(`/feeds?subTab=${subTab}`, {
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
