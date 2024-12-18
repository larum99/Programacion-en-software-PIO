/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
          light: "var(--primary-color-light)",
          extraLight: "var(--primary-color-extra-light)",
        },
        secondary: {
          DEFAULT: "var(--secondary-color)",
          dark: "var(--secondary-color-dark)",
        },
        textLight: "var(--text-light)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
}

