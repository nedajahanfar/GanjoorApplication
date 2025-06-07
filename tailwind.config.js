/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}","./screens/**/*.{js,ts,jsx,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Primary colors from Ganjoor.net
        primary: {
          DEFAULT: '#4a6baf',  // Main blue color used in headers and links
          dark: '#3a5691',     // Darker blue for hover states
          light: '#5c7bc1',    // Lighter blue variant
        },
        // Secondary colors
        secondary: {
          DEFAULT: '#a67c52',  // Brown color used for some accents
          dark: '#8a6843',
        },
        // Text colors
        text: {
          DEFAULT: '#333333',  // Main text color
          light: '#555555',     // Lighter text
          lighter: '#777777',   // Secondary text
          inverted: '#ffffff', // White text on dark backgrounds
        },
        // Background colors
        bg: {
          DEFAULT: '#ffffff',      // Main white background
          light: '#f8f8f8',        // Light gray background
          dark: '#2c3e50',         // Dark blue background (footer)
          content: '#f5f5f5',      // Content background slightly off-white
        },
        // Border colors
        border: {
          DEFAULT: '#e0e0e0',     // Light gray borders
          dark: '#cccccc',         // Darker borders
        },
        // Special colors
        highlight: '#f9f3e9',      // Beige highlight color
        error: '#d9534f',          // Red for errors (similar to Bootstrap's danger)
        success: '#5cb85c',        // Green for success
      },
    },
  },
  plugins: [],
}

