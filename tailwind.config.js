
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      
      'lg': {'max': '875px'},

      'lg2': {'max': '800px'},

      'other1' : {'max' : '720px'},

      'other2' : {'max' : '490px'},

      'md':  {'max': '1150px'},//1535px

      'footer' : {'max' : '1535px'},

      'sm2' : {'max' : '600px'},
      
      'sm': {'max': '375px'},
     
    },
    extend: {},
  },
  plugins: [],
}


// module.exports = {
//   theme: {
//     screens: {
      
//       'lg': '875px',
//       // => @media (max-width: 1023px) { ... }

//       'md':  '767px',
//       // => @media (max-width: 767px) { ... }

//       'sm': '639px',
//       // => @media (max-width: 639px) { ... }
//     }
//   }
// }

