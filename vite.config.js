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
      '@': fileURLToPath(new URL('./api', import.meta.url)),
      '@cron': fileURLToPath(new URL('./cron', import.meta.url)),
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
    outDir: './dist',
    rollupOptions: {
      input: './cron/index.js',
      output: {
        format: 'esm',
        entryFileNames: 'cron/[name].js',
        chunkFileNames: 'cron/[name].js',
        assetFileNames: 'cron/[name].[ext]',
        exports: 'auto',
      },
    },
  },
})
