import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        nosotros: 'nosotros.html',
        servicios: 'servicios.html',
        ubicacion: 'ubicacion.html',
      },
    },
  },
})
