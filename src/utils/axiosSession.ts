import axios, { type AxiosInstance } from "axios"
import { getServerSession } from "next-auth"

export const axiosServerInstance: AxiosInstance = axios.create({
  //   baseURL: `${process.env.ServerDefaultUrl}`,
  baseURL: "http://52.79.175.72:8080",
  headers: {
    "Content-Type": "application/json",
  },
})

axiosServerInstance.interceptors.request.use(
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
axiosServerInstance.interceptors.response.use(
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
