import { axiosClientInstance } from "@utils/axios"
import { SignFormProps } from "@utils/interface"

const registerUser = async (formData: SignFormProps) => {
  try {
    const response = await axiosClientInstance.post("/user/register", formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export default registerUser
