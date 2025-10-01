import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Changed from '/productportfolio/' for custom domain
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
