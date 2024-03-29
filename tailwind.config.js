/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mountain-home": "url('/backgrounds/mountain-background.jpg')"
      }
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require("flowbite/plugin")]
};
