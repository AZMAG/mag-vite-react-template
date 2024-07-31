/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        magTeal: "#108284",
        magDark: "#055861",
        magLight: "#29A2AB",
        magSecondary: "#6A1D87",
        magSecondaryLight: "#A32CCE",
      },
    },
  },
  plugins: [],
}
