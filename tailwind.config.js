/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
;
export const theme = {
  extend: {
    backgroundImage: {
      "bluebg": "url('/src/assets/bluebg.jpg')",
    },
    scrollSnapType: {
      y: 'y mandatory',
    },
    scrollSnapAlign: {
      start: 'start',
    },
    fontFamily: {
      'playwrite': ['"Playwrite AU NSW"', 'sans-serif'],
    },
  },
};
export const plugins = [];
