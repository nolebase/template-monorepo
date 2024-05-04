import type { InjectionKey } from 'vue'

import type { InjectionOptions } from './types'

export const exampleInjectionKey: InjectionKey<InjectionOptions> = Symbol('exampleInjectionKey')
