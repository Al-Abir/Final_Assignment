import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/': {
        target: "final-assignment-inky.vercel.app", // Fix the missing "//" in "http://"
        changeOrigin: true
      }
    }
  }
})
