import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Prizm ui-kit',
  description: 'ui-kit основанный на element-plus по дизайн системе Prizm',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Components', link: '/components/prizm-button' },
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
        {
          text: 'Feedback components',
          collapsed: false,
          items: [
            { text: 'Dialog', link: '/components/prizm-dialog' },
            { text: 'Tooltip', link: '/components/prizm-tooltip' },
            { text: 'Message box', link: '/components/prizm-message-box' },
            { text: 'Notification', link: '/components/prizm-notification' },
            { text: 'Drawer', link: '/components/prizm-drawer' },
          ],
        },
        {
          text: 'Navigation components',
          collapsed: false,
          items: [
            { text: 'Tabs', link: '/components/prizm-dialog' },
            {
              text: 'Dropdown',
              collapsed: true,
              items: [
                {
                  text: 'Dropdown',
                  link: '/components/dropdown/prizm-dropdown.md',
                },
                {
                  text: 'Dropdown menu',
                  link: '/components/dropdown/prizm-dropdown-menu.md',
                },
                {
                  text: 'Dropdown item',
                  link: '/components/dropdown/prizm-dropdown-item.md',
                },
              ],
            },
            { text: 'Todo anchor', link: '/components/prizm-dialog' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/garaev-vadim-m' }],
  },
});
