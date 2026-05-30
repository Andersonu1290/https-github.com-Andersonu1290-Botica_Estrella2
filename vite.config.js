import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite' // 🌟 1. Importamos Tailwind

// https://vite.dev
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(), // 🌟 2. Agregamos el plugin aquí
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 🔥 CONFIGURACIÓN DEL PROXY PARA REDIRIGIR A SPRING BOOT
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8089', // Tu puerto local de Spring Boot
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
