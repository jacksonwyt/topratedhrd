/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Ensure this matches your dark mode strategy (class or media)
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Include specific file types if needed
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Scanning src directory
	],
  theme: {
    extend: {
      // Theme extensions (colors, fonts, etc.) can be added here.
      // We are currently relying on the CSS variables defined in globals.css
      // and the default Tailwind theme.
    },
  },
  plugins: [
    // Add any necessary Tailwind plugins here.
    // require("tailwindcss-animate"), // Example: Uncomment and install if needed
  ],
} 