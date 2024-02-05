/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray_10: "#D9D9D9",
      gray_1: "#F6F6F6",
      gray_2: "#E4E4E4",
      gray_3: "#CDCDCD",
      gray_4: "#BABABA",
      gray_5: "#8C8C8C",
      gray_6: '#767676',
      gray_8: '#1F1F1F',
      link: '#2A64F5',
      success: "#35C75A",
      success_1: "#CFF2D8",
      success_6: "#32862B",
      error_500: "#CA462A"
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        hedvig: ["Hedvig Regular", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      screens: {
        ios : '320px',
        samsungS8: "360px",
        xs: '390px',
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl":'1440px',
        "3xl": "1920px",
      },
      boxShadow: {
        'gray_shadow': '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }
    },
    boxShadow: {
      'gray_shadow': '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
    }
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  darkMode: ["class"],
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
}
