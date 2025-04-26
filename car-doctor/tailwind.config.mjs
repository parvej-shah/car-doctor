/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF3811', 
        secondary: '#10b981', 
        "primary-text": '#444444',
        "secondary-text": '#737373',
        "white": '#ffffff',
        "secondary-bg": '#F3F3F3'
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
