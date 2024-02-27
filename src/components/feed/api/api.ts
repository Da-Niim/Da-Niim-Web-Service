export default async function fetchData(url: string, subTab: string, accessToken: string) {
  try {
    const baseUrl = "http://localhost:8080"
    const endpoint = "/feeds" // 여기 수정해야됨
    const fetchUrl = `${baseUrl}${endpoint}?subTab=${subTab}`

    const response = await fetch(fetchUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const data = await response.json()
    if (data === null) {
      console.log(null)
    }
    console.log(data)

    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    return null
  }
}
