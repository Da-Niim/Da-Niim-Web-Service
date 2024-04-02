export const IdPattern = /^[A-Za-tterns ()z0-9]{3,10}$/
export const PasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
export const PasswordMessage = `영문(대소문자), 숫자, 특수 문자를 혼합하여`
export const PasswordMessage2 = `8자 이상 20자 이내로 입력해주세요.`
export const EmailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
export const PhoneNumberPattern = /^010-\d{4}-\d{4}$/
