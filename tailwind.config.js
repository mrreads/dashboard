/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm':	{'max': '640p'},
      'md':	{'max': '768p'},
      'lg':	{'max': '1024px'},
      'xl':	{'max': '1280px'},
      '2xl':	{'max': '1536px'}
    },
    extend: {},
  },
  plugins: [],
}
