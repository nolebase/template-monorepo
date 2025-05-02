import type { InjectionOptions } from '@example-org/example-vue-component'

import type { Theme } from 'vitepress'
import type { Plugin } from 'vue'

import { examplePlugin } from '@example-org/example-vue-component'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

// During development, we don't need to import the CSS of the monorepo packages
// since we are using the direct transpiling, bundle, previewing through
// Vite instead of bundle them all each time we edit files.
//
// import '@example-org/example-vue-component/style.css'

import 'virtual:uno.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    app.use(examplePlugin as Plugin, {
      option1: 'value1',
      option2: 2,
      optionRuntimeFunction: args => `Hello, ${args}!`,
    } as InjectionOptions)
  },
} satisfies Theme
