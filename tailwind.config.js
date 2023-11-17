// tailwind.config.js

module.exports = {
  mode: "jit", // Just-in-Time 컴파일 모드 활성화
  purge: ["./src/app/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // 다크 모드 지원 설정
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
