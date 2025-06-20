import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [react(), tailwind()],
  server: {
    proxy: {
      '/api': 'http://localhost:8088'
    }
  }
})