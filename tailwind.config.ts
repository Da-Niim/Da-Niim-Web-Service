import type { Config } from "tailwindcss"

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "essential-100": "#EDD8BC",
        "essential-200": "#FFCD8B",
        "essential-300": "#F1B464",
        "essential-400": "#D7A86A",
        "essential-500": "#DC9435",
        "essential-600": "#E08B1B",
        "essential-700": "#CF7703",
        "essential-800": "#AA6407",
        "essential-900": "#6F4003",
        "gray-100": "#F2F3F6",
        "gray-200": "#EAEBEE",
        "gray-300": "#DCDEE3",
        "gray-400": "#D1D3D8",
        "gray-500": "#ADB1BA",
        "gray-600": "#868B94",
        "gray-700": "#4D5159",
        "gray-800": "#393A40",
        "gray-900": "#121212",
        highlight: "#D2B48C",
        "text-color": "#121212",
        "text-subdued": "#A7A7A7",
        white: "#F2F2F2",
      },
    },
  },
  plugins: [],
}
export default config
