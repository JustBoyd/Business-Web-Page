module.exports = {
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        rotateLogo: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'rotateLogo 20s linear infinite',
      },
      fontFamily: {
        sans: ['Cairo Play', 'sans-serif'],
        code: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        gold: "#ffd700",
        gray: {
          50: '#B6B6B6',
          100: '#A4A4A4',
          200: '#929292',
          300: '#808080',
          400: '#6D6D6D',
          500: '#5B5B5B',
          600: '#494949',
          700: '#373737',
          800: '#242424',
          900: '#121212',
        },
        green: "#00EA2B",
        blue: "#3665FF",
        yellow: "#EAE700",
        violet: "#EA0071",
        purple: "#9C00EA",
      },
    },
  },
  plugins: [],
};



