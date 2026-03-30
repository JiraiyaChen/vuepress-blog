import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '我的博客',
  description: '使用 VuePress 2 搭建的博客',

  themeConfig: {
    navbar: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/' }
    ]
  }
})