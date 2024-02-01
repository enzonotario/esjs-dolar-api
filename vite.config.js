import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import EsJS from '@es-js/vite-plugin-esjs'

export default defineConfig({
  plugins: [
    // https://github.com/es-js/esjs
    EsJS(),
  ],

  test: {},

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./cron', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.esjs',
    ],
  },

  build: {
    outDir: './dist/cron',
    emptyOutDir: false,
    rollupOptions: {
      input: './cron/index.js',
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        exports: 'auto',
      },
    },
  },
})
