import { describe, expect, it } from 'vitest'

import { helloWorld } from '.'

describe('example-typescript', () => {
  it('helloWorld', () => {
    const res = helloWorld()
    expect(res).toBeDefined()
    expect(res).toBe('Hello, World!')
  })
})
