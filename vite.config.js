import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  preview: {
    port: 3000,
    host: true
  },
  server: {
    port: 5173,
    host: true
  }
})
