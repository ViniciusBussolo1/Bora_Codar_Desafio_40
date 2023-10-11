import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-button': 'linear-gradient(90deg, #996DFF 0%, #C7AFFF 100%)',
      },
      colors: {
        black: '#09090A',
        white: '#FFFFFF',
        gray: '#C4C4CC',
      },
    },
  },
  plugins: [],
}
export default config
