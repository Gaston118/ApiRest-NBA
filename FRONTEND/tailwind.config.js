/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '2.5rem 0 2.5rem 0',
      },
      transformOrigin: {
        'custom': 'center',
      },
      scale: {
        '95': '0.95',
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'],
      borderWidth: ['hover'],
      borderRadius: ['hover'],
      transform: ['hover'],
      scale: ['hover'],
    },
  },
  plugins: [],
}