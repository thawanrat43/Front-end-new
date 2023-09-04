import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import http from "https";
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target: 'https://back-end-update.onrender.com',
           changeOrigin: true,
           secure: false,      
           agent: new http.Agent()
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
  plugins: [react()],
})
