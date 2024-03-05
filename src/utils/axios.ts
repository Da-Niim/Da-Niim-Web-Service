import axios, { type AxiosInstance } from "axios"

export const axiosInstance: AxiosInstance = axios.create({
  // url: "52.79.175.72:8080",
 baseURL: "http://localhost:8080/",
})
