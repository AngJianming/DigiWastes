// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    base: '/DigiWaste/',
    plugins: [react()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    server: {
      port: 3000,
      open: true,
      host: true
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2020'
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      target: 'es2020'
    }
  }
})