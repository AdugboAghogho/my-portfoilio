//@type {import('postcss-load-config').Config} 
// // const config = {
// //   plugins: {
// //     tailwindcss: {},
// //   },
// // };

// export default config;

// export default {
//   plugins: {
//     autoprefixer: {},
//     tailwindcss: {},
//   },
// };

module.exports = {
  plugins: {
    autoprefixer: {}, // Ensure autoprefixer is listed
    tailwindcss: {},
  },
};