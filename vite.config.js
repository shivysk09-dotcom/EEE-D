import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        legacy: resolve(__dirname, 'legacy.html'),
        research: resolve(__dirname, 'research.html'),
        post: resolve(__dirname, 'post.html'),
      }
    }
  }
})
