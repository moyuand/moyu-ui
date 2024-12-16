import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { compression } from 'vite-plugin-compression2';
import { readFileSync } from 'fs'
import shell from 'shelljs'
// import { delay } from 'lodash-es';
// import hooksPlugin from './hooksPlugin'
const TRY_MOVE_STYLES_DELAY = 800
// function moveStyles() {
//   try {
//     readFileSync('./dist/umd/index.css.gz')
//     shell.cp('./dist/umd/index.css', './dist/index.css')
//   } catch(e) {
//     delay(moveStyles, TRY_MOVE_STYLES_DELAY)
//   }
// }

export default defineConfig({
  plugins: [
    vue(),
    compression({
      include: /.(js|css)$/i,
    }),
    // hooksPlugin({
    //   rmFiles: ['./dist/umd', './dist/index.css'],
    //   afterBuild: moveStyles
    // }) 
  ],
  build: {
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'MoyuUI',
      fileName: 'index', 
      formats: ['umd'], 
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name as string;
        }
      }
    }
  }
})