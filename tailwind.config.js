/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spacemono: '"Space Mono", monospace',
        karla: "Karla, sans-serif",
        poppins: "Poppins, sans-serif",
        dmserif: "'DM Serif Display', serif",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
