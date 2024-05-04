import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: false,
  ignores: [
    '**/*.md',
    '**/*.yaml',
    '**/*.yml',
    '**/*.toml',
  ],
})
