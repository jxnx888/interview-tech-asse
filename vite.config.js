import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/utils/svgBuilder';


export default defineConfig({
  plugins: [
    vue(),
    svgBuilder('./src/assets/svg/')
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
