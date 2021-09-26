module.exports = {
  purge: ['./src/**/*.tsx', './pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      national2_heading: ['national-2-heading', 'sans-serif'],
      national2_paragraph: ['national-2-paragraph', 'sans-serif'],
      national2_eyelash: ['national-2-eyelash', 'sans-serif'],
    },
    fontSize: {
      hdln1: ['50px', '57.1px'],
      hdln2: ['30px', '34.26px'],
      hdln3: ['23px', '26.7px'],
      hdln4: ['18px', '20.56px'],
      parag1: ['30px', '35.07px'],
      parag2: ['25px', '29.23px'],
      parag3: ['18px', '21.04px'],
    },
    colors: {
      primary: {
        DEFAULT: '#F53C5A',
        light: '#F5C3C3',
        lightest: '#FEF5F5',
      },
      black: {
        DEFAULT: '#37373C',
        light: '#EBEBEB',
      },
      white: '#fff',
    },
    screens: {
      mobile: '480px',
      // => @media (min-width: 640px) { ... }

      desktop: '1080px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
