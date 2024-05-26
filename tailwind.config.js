/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cello: {
          50: '#f1f7fd',
          100: '#e0eef9',
          200: '#c7e1f6',
          300: '#a1ceef',
          400: '#74b3e6',
          500: '#5396de',
          600: '#3f7cd1',
          700: '#3568c0',
          800: '#31559c',
          900: '#2c497c',
          950: '#25375b'
        },
        shark: {
          50: '#f3f6f8',
          100: '#e1e8ec',
          200: '#c7d2da',
          300: '#a0b2c0',
          400: '#728b9e',
          500: '#577083',
          600: '#4b5d6f',
          700: '#414f5d',
          800: '#3b444f',
          900: '#2c323a',
          950: '#20252c'
        },
        dshark: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae5',
          300: '#abbcce',
          400: '#7d97b3',
          500: '#5d7b9a',
          600: '#496280',
          700: '#3c4f68',
          800: '#344458',
          900: '#2f3b4b',
          950: '#1a2029'
        }
      }
    }
  },
  plugins: []
}
