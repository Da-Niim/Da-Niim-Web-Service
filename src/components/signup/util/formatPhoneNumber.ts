export const formatPhoneNumber = (value: string) => {
  const clearValue = value.replace(/[^0-9]/g, "")
  let formattedValue = clearValue.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
  if (formattedValue.length > 13) {
    formattedValue = formattedValue.substring(0, 13)
  }
  return formattedValue
}
