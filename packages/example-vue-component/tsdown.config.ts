import { exec } from 'node:child_process'
import { promisify } from 'node:util'

import Vue from 'unplugin-vue/rolldown'

import { defineConfig } from 'tsdown'

const execAsync = promisify(exec)

export default defineConfig({
  entry: 'src/index.ts',
  platform: 'neutral',
  dts: { vue: true },
  unused: true,
  fixedExtension: true,
  plugins: [
    Vue(),
  ],
  hooks: {
    'build:done': async () => {
      // Since not all the users would choose to use unocss,
      // we bundle the styles from unocss here for users to opt-in.
      //
      // However, since the unocss doesn't provide a unplugin, or rollup
      // plugin for us to use, we have to use the CLI here.
      //
      // The use of CLI was suggested by how to use unocss with rollup? · unocss/unocss · Discussion #542
      // https:// github.com/unocss/unocss/discussions/542
      await execAsync('unocss "./src/**/*.vue" -o dist/style.css')
    },
  },
})
