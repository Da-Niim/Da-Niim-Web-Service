import axios, { type AxiosInstance } from "axios"
import { getServerSession } from "next-auth"

export const axiosInstance: AxiosInstance = axios.create({
  //   baseURL: `${process.env.ServerDefaultUrl}`,
  baseURL: "http://52.79.175.72:8080",
})

axiosInstance.interceptors.request.use(
  async function (config) {
    const session = await getServerSession()
    if (session && session.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("401에러")
    } else if (error.response && error.response.status === 404) {
      console.log("404에러")
    } else if (error.response && error.response.status === 500) {
      console.log("500에러")
    } else {
    }
    return Promise.reject(error)
  },
)
