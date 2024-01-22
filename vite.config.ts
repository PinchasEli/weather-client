import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: `@import "@/styles/main.scss";`
  //     }
  //   }
  // }
})

// module.exports = {
//   css: {
//     loaderOptions: {
//       scss: {
//         additionalData: `@import "@/styles/main.scss";`
//       }
//     }
//   }
// };