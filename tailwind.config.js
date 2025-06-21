/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        border: "var(--color-border)",
        link: "var(--color-link)",
        placeholder: "var(--color-placeholder)",
        alert: "var(--color-alert)",
        header: "var(--color-header)",
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [],
};
