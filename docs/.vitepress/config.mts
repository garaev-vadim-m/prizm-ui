import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PrizmUiKit',
  description: 'PrizmUiKit',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Style guide', link: '/style-guide' },
      { text: 'Components', link: '/components/prizm-button' },
      { text: 'Package', link: '/package' },
    ],

    sidebar: {
      '/components/': [
        {
          text: 'Basic components',
          collapsed: false,
          items: [
            { text: 'Button', link: '/components/prizm-button' },
            { text: 'Icon', link: '/components/prizm-icon' },
          ],
        },
        {
          text: 'Form components',
          collapsed: false,
          items: [
            { text: 'Input', link: '/components/prizm-input' },
            {
              text: 'Form',
              collapsed: true,
              items: [
                {
                  text: 'Form',
                  link: '/components/form/prizm-form',
                },
                {
                  text: 'FormItem',
                  link: '/components/form/prizm-form-item',
                },
              ],
            },
            { text: 'Date picker', link: '/components/prizm-date-picker' },
            { text: 'Date time picker', link: '/components/prizm-date-time-picker' },
            { text: 'Time picker', link: '/components/prizm-date-time-picker' },
          ],
        },
        {
          text: 'Data components',
          collapsed: false,
          items: [
            {
              text: 'Table',
              collapsed: true,
              items: [
                { text: 'Table', link: '/components/table/prizm-table' },
                { text: 'Table column', link: '/components/table/prizm-table-column' },
              ],
            },
            { text: 'Avatar', link: '/components/prizm-avatar' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
