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
        highlight: "#D2B48C",
        "text-color": "#121212",
        "text-subdued": "#A7A7A7",
        white: "#F2F2F2",
        "input-bg-color": "#f9f9f9",
        "submit-bg-color": "#d2b48c",
      },
    },
  },
  plugins: [],
}
export default config
