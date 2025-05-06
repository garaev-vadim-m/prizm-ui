import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PrizmUiKit",
  description: "PrizmUiKit",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Components', link: '/components/prizm-button' }
    ],

    sidebar: {
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'PrizmButton', link: '/components/prizm-button' },
            { text: 'PrizmInput', link: '/components/prizm-input' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
