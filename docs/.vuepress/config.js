import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  lang: 'zh-CN',
  title: '我的博客',
  description: '使用 VuePress 2 搭建的博客',

  bundler: viteBundler(),

  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '文章列表', link: '/2026-03-23A股日报' },
      { text: '关于', link: '/about/' },
      { text: '新页面', link: '/new-page/' },
    ],
    sidebar: [
      {
        text: '文章',
        children: [
          '/2026-03-23A股日报.md',
          '/2026-03-28.md',
          '/2026-03-30-时政热点早报.md',
          '/2026江苏代表团发言汇总.md',
          '/2026江苏科技创新产业创新讲话.md',
          '/2026年江苏省政府工作报告.md',
          '/2026年江苏事业单位招聘公告汇总.md',
          '/错题本模板.md',
          '/国内时政新闻摘要-20260312.md',
          '/每日投资记录.md',
          '/述职报告总结.md',
          '/新质生产力详解.md',
          '/央视会议总结.md',
          '/一平方米里的增值发展总结.md',
          '/openclaw_common_commands.md',
        ],
      },
    ],
  }),
});
