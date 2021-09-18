module.exports = {
  purge: ['./src/**/*.tsx', './pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      national2: ['national-2', 'sans-serif'],
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
