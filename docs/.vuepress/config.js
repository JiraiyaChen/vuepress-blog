import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '我的博客',
  description: '使用 VuePress 2 搭建的博客',

  bundler: viteBundler(),

  dest: '.vuepress/dist',

  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/' }
    ]
  })
})