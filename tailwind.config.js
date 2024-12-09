/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        sky: "#41AEE7",
        navy: "#054BA6",
        primary: "#FACB46",
        cardBorder: "#7DD0FF",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        movavi: ['movavi-grotesque-black', 'sans-serif'],
      },
      textStroke: {
        DEFAULT: "0.5px black",
        button: "0.5px #1F1F1F",
        "button-sm": "0.3px #1F1F1F",
      },
      textShadow: {
        DEFAULT: "0 0.5px 0px rgba(0, 0, 0, 0.5)",
        p: "0 0.58px 0px rgba(0, 0, 0)",
        halfBlack: "0 0.5px 0px rgba(0, 0, 0, 0.5)",
        button: "0 0.5px 0px #1F1F1F",
        heading1: "0 2px 0px #000000",
        heading2: "0 1px 0px #000000",
      },
      boxShadow: {
        primaryButton: "0 1px 1px rgba(0, 0, 0, 0.25), inset 0 2px 0 #FFEEBA, inset 0 -2px 0 #7A5D00",
        secondaryButton: "0 1px 1px rgba(0, 0, 0, 0.25), inset 0 2px 0 #BEE3FF, inset 0 -2px 0 #155388",
        cardItem: "0 1px 10px rgba(125, 208, 255, 0.5)",
        listItems: "inset 0 4px 4.5px rgba(0, 3, 6, 0.5)",
        listItemInfo: "0 1px 4px rgba(0, 174, 229, 0.5)",
      },
      backgroundImage: {
        card1: "url('/assets/card-1.png')",
        card2: "url('/assets/card-2.png')",
        primaryButton: "linear-gradient(#F7CB40, #DDAD1C)",
        secondaryButton: "linear-gradient(#44A2E5, #2E7EC2)",
        listItem:
          "linear-gradient(to right, rgba(167, 222, 253, 0), rgba(167, 222, 253, 1), rgba(167, 222, 253, 0))",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "0.5px black",
          "text-stroke": "0.5px black",
        },
        ".text-stroke-button": {
          "-webkit-text-stroke": "0.5px #1F1F1F",
          "text-stroke": "0.5px #1F1F1F",
        },
        ".text-stroke-button-sm": {
          "-webkit-text-stroke": "0.3px #1F1F1F",
          "text-stroke": "0.3px #1F1F1F",
        },
      });
    },
  ],
};
