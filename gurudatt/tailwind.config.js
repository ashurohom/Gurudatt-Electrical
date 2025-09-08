// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#FFD700", // golden yellow (like lightning ⚡)
          secondary: "#1E3A8A", // deep blue
          accent: "#F97316", // orange
          dark: "#0F172A", // dark navy (background)
          light: "#F1F5F9", // light gray
        },
      },
      fontFamily: {
        kite: ["'Kite One'", "sans-serif"],
        rounded: ["'M PLUS Rounded 1c'", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
