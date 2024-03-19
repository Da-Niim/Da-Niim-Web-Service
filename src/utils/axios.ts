import axios, { type AxiosInstance } from "axios"
import { getSession } from "next-auth/react"

export const axiosInstance: AxiosInstance = axios.create({
  //   baseURL: `${process.env.ServerDefaultUrl}`,
  baseURL: "http://52.79.175.72:8080",
})

axiosInstance.interceptors.request.use(
  async function (config) {
    const session = await getSession()
    if (session && session.accessToken) {
      config.headers.Authorization = `Bearer ${session?.accessToken}`
      console.log(session)
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
    } else if (error.response && error.response.status === 404) {
    } else if (error.response && error.response.status === 500) {
    } else {
    }
    return Promise.reject(error)
  },
)
