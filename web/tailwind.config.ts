import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          light: '#2a4f7f',
          dark: '#142840',
        },
        accent: {
          DEFAULT: '#d4a843',
          light: '#e8c46a',
          dark: '#b8902e',
        },
        warm: {
          white: '#faf8f5',
          gray: '#f0ede8',
          border: '#e0ddd8',
        },
      },
      fontFamily: {
        'serif-cn': ['"Noto Serif SC"', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
