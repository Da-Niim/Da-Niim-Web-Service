import axios, { type AxiosInstance } from "axios"

export const axiosInstance: AxiosInstance = axios.create({
  //   baseURL: `${process.env.NEXTAUTH_URL}`,
  baseURL: "http://52.79.175.72:8080",
})
