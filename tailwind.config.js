/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      minHeight: {
        100: "10rem",
        1000: "calc(100vh - 272px)",
      },
    },
  },
  plugins: [],
};
