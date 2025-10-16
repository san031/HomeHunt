import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    import('@tailwindcss/typography'),
  ],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ['Inter', 'sans-serif'], // set Inter as primary sans
  //     },
  //   },
  // },
})
