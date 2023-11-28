/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./public/**/*.html",
//     "./src/**/*.js",
//     "./src/**/*.jsx",
//     "./src/**/*.ts",
//     "./src/**/*.tsx",
//   ],
//   purge: [
//     "./public/**/*.html",
//     "./src/**/*.js",
//     "./src/**/*.jsx",
//     "./src/**/*.ts",
//     "./src/**/*.tsx",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  // ... other config options ...

  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
};
