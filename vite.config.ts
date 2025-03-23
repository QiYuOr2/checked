// Change the import to use your runtime specific build
import build from '@hono/vite-build/node'
import devServer from '@hono/vite-dev-server'

import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    plugins: [
      build({
        entry: 'src/index.ts',
      }),
      devServer({
        entry: 'src/index.ts',
      }),
    ],
  }
})
