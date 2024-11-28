import type { Plugin } from 'vue'

import type { InjectionOptions } from './types'
import ExampleComponent from './components/ExampleComponent.vue'
import { exampleInjectionKey } from './constants'

export const examplePlugin: Plugin<InjectionOptions> = {
  install(app, options?: InjectionOptions) {
    app.provide(exampleInjectionKey, options)
    app.component('ExampleComponent', ExampleComponent)
  },
}

export {
  ExampleComponent,
  exampleInjectionKey,
}

export type {
  InjectionOptions,
}
