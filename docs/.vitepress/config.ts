import { join, resolve } from 'node:path'

import UnoCSS from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'

import { helloWorld } from '@example-org/example-typescript'
import { defineConfig } from 'vitepress'

import packageJSON from '../../package.json'

// eslint-disable-next-line no-console
console.log(helloWorld())

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@example-org/example-vue-component': resolve(join(import.meta.dirname, '..', '..', 'packages', 'example-vue-component', 'src')),
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
  },
  lastUpdated: true,
  ignoreDeadLinks: [
    // Site Config | VitePress
    // https://vitepress.dev/reference/site-config#ignoredeadlinks
    //
    // ignore all localhost links
    /^https?:\/\/localhost/,
  ],
  themeConfig: {
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/example-org/example-repo' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-CN': {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
  },
  locales: {
    'root': {
      label: 'English',
      lang: 'en',
      link: '/pages/en/',
      title: 'Example Org',
      description: 'Description for Example Org',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/pages/en/guide/' },
          { text: 'Components', link: '/pages/en/components/' },
          { text: packageJSON.version, link: 'https://github.com/example-org/example-repo/releases' },
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Overview', link: '/pages/en/guide/' },
              { text: 'Getting started', link: '/pages/en/guide/getting-started' },
            ],
          },
          { text: 'Components', link: '/pages/en/components/' },
        ],
      },
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/pages/zh-CN/',
      title: 'Example Org',
      description: 'Example Org 的描述',
      themeConfig: {
        nav: [
          { text: '指南', link: '/pages/zh-CN/guide/' },
          { text: '组件', link: '/pages/zh-CN/components/' },
          { text: packageJSON.version, link: 'https://github.com/example-org/example-repo/releases' },
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '概览', link: '/pages/zh-CN/guide/' },
              { text: '快速开始', link: '/pages/zh-CN/guide/getting-started' },
            ],
          },
          { text: '组件', link: '/pages/zh-CN/components/' },
        ],
      },
    },
  },
})
