/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // This scans all your components
  theme: {
    extend: {
      colors:{
        primay : '#106EBE',
        secondary :"#0FFCBE",
        btnHighlight : "#FCA311",  //Warm Yellow)
        neutralBackground :"#F3F4F6",   //Light Gray)
        textColor : "#1F2937", // (Dark Gray)
        ctaBtn: "#FF5C93" ,  // (Vivid Pink)

        Charcoal  :'#333333',
        onyx: '#353535',
        jet: '#000000',

      },
      fontFamily: {
        'kaushan': ['Kaushan Script', 'cursive'],
        'lobster': ['Lobster', 'cursive'], // 'lobster' is your custom name
         // 'kaushan' is your custom name
      },
    },
  },

  plugins: [],
}
