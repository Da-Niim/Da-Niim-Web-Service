const API_URL = "http://localhost:8080"

const registerUser = async (formData: any) => {
  try {
    const response = await fetch(`${API_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      console.log("데이터가 성공적으로 전송되었습니다.")
      window.location.href = "/login"
    } else {
      const errorResponse = await response.json()
      const errorMessage = errorResponse.detail.message
      console.error("서버 오류: ", errorMessage)
    }
  } catch (error) {
    console.error("데이터 전송 중 오류가 발생했습니다: ", error)
  }
}

export default registerUser
