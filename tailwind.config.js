/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['DM Sans'],
      },
      colors: {
        navColor: '#767676',
        menuTxtColor: '#262626',
        inputColor: '#C4C4C4',
        headerBg: '#F5F5F3',
        policyColor: '#6D6D6D',
        borderColor: '#F0F0F0',
        dropDownBorderColor: '#2D2D2D',
        dropDownMenuColor: '#ffffffb3',
        myAccBg: '#2B2B2B',
        arrowBg: '#979797',
      },
      backgroundImage: {
        bannerBackground: "url('/src/assets/banner-background.png')",
      },
    },
  },
  plugins: [],
}