import { defineConfig } from 'vite'

export default defineConfig({
  root: "./src",
  base: "",
  build: {
    outDir: "./../out",
    emptyOutDir: true,
    assetsDir: "./"
  },
})