import { defineConfig } from 'vite'

export default defineConfig({
  root: "./src",
  build: {
    outDir: "./out",
    emptyOutDir: true,
    assetsDir: "./"
  },
})