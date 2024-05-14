import { axiosInstance } from "@utils/axios"
import { SignFormProps } from "@utils/interface"

const registerUser = async (formData: SignFormProps) => {
  const response = await axiosInstance.post("/user/register", formData)
  console.log(response.data)
  try {
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default registerUser
