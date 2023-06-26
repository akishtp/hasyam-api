/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      minHeight: {
        100: "10rem",
        144: "calc(100vh - 256px)",
        1000: "calc(100vh - 176px)",
      },
      width: {
        1000: "calc(100% - 80px)",
        42: "calc(100% - 128px)",
      },
    },
  },
  plugins: [],
};
