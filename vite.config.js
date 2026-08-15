import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Use '/' for local development (command === 'serve'), and '/km-store/' for production build (command === 'build')
    base: command === 'serve' ? '/' : '/km-store/',
  }
})