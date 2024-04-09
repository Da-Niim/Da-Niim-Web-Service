//TODO: axiosInstance + any제거
const registerUser = async (formData: any) => {
  try {
    const response = await fetch(`http://52.79.175.72:8080/user/register`, {
      // const response = await fetch(`${process.env.ServerDefaultUrl}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      window.location.href = "/login"
    } else {
      const errorResponse = await response.json()
      // const errorMessage = errorResponse.detail.message
      // console.error("서버 오류: ", errorMessage)
    }
  } catch (error) {
    // console.error("데이터 전송 중 오류가 발생했습니다: ", error)
  }
}

export default registerUser
