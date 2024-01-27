import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import EsJS from '@es-js/vite-plugin-esjs'
import devServer from '@hono/vite-dev-server'

export default defineConfig({
  plugins: [
    // https://github.com/es-js/esjs
    EsJS(),

    devServer({
      entry: './api/api.esjs',
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./api', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.esjs'],
  },

  build: {
    outDir: './dist',
    emptyOutDir: false,
    rollupOptions: {
      input: './api/api.esjs',
      output: {
        format: 'esm',
        entryFileNames: 'servidor/[name].js',
        chunkFileNames: 'servidor/[name].js',
        assetFileNames: 'servidor/[name].[ext]',
        exports: 'auto',
      },
    },
  },
})
