/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: {
          5: "#F9FAFB",
          10: "#EFEFF6",
          20: "#EBEBF0",
          40: "#C1C1CB",
          50: "#9494A0",
        },
        "blue-grey-regular": "#424F5E",
        "danger-regular": "#FF9E90",
        "button-bg": "#32C076",
        "button-bg-hover": "#28ce78",
      },
      borderRadius: {
        default: "0.625rem",
      },
      boxShadow: {
        default: "-30px 30px 50px 0px rgba(28,28,30,0.1)",
      },
    },
  },
  plugins: [],
};
