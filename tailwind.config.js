/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      maxWidth: {
        template: 'calc(100vw - ((100vw - 1180px)) / 2)',
      },
    },
  },
  plugins: [],
}
