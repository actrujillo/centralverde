/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        a: "#fdfdfd",
        b: "#c4e3ce",
        c: "134c27",
        d: "009033",
        dede: "b1b2b7",
      },
    },
  },
  plugins: [],
};
