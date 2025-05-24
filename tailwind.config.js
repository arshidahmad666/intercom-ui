// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // all pages
    "./components/**/*.{js,ts,jsx,tsx}", // all components
    // add any other folders where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
