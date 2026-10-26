import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://notaria80gdl.mx',
  build: {
    format: 'file',
  },
})
