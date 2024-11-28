import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  resolve: {
    alias: {
      '@example-org/example-vue-component': resolve(__dirname, '../packages/example-vue-component/src'),
    },
  },
  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },
  plugins: [
    UnoCSS(),
    Inspect(),
  ],
})
