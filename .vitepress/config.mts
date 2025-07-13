import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs-demo',
  title: "我的项目",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/backgroup.png',
    outlineTitle: '目录',
    outline: [2, 6],
    nav: [
      { text: '家', items:[
        {text: '首页', link: '/'},
        {text: 'markdown示例', link: '/markdown-examples'},
      ] },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown 演示', link: '/markdown-examples' },
          { text: 'Runtime API  演示', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cheng-source' }
    ]
  }
})
