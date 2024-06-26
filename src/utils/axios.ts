import axios, { type AxiosInstance } from "axios"

export const axiosClientInstance: AxiosInstance = axios.create({
  //   baseURL: `${process.env.ServerDefaultUrl}`,
  baseURL: "http://52.79.175.72:8080",
})

axiosClientInstance.interceptors.request.use(
  async function (config) {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
axiosClientInstance.interceptors.response.use(
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
