/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      blob1: "blobMove1 18s ease-in-out infinite",
      blob2: "blobMove2 20s ease-in-out infinite",
      blob3: "blobMove3 22s ease-in-out infinite",
      blob4: "blobMove4 24s ease-in-out infinite",
      blob5: "blobMove5 26s ease-in-out infinite",
      blob6: "blobMove6 28s ease-in-out infinite",
    },
    keyframes: {
      blobMove1: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(30px, -20px)' }
      },
      blobMove2: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(-40px, 20px)' }
      },
      blobMove3: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(20px, 40px)' }
      },
      blobMove4: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(-30px, -30px)' }
      },
      blobMove5: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(40px, 10px)' }
      },
      blobMove6: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(-10px, -40px)' }
      },
    },
  },
},

  darkMode: 'class',
  plugins: [],
}