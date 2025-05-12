import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Prizm ui-kit',
  description: 'ui-kit основанный на element-plus по дизайн системе Prizm',
  themeConfig: {
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
            { text: 'Switch', link: '/components/prizm-switch' },
            {
              text: 'Checkbox',
              collapsed: true,
              items: [
                {
                  text: 'Checkbox',
                  link: '/components/checkbox/prizm-checkbox',
                },
                {
                  text: 'Checkbox group',
                  link: '/components/checkbox/prizm-checkbox-group',
                },
              ],
            },
            {
              text: 'Select',
              collapsed: true,
              items: [
                {
                  text: 'Select',
                  link: '/components/select/prizm-select',
                },
                {
                  text: 'Option',
                  link: '/components/select/prizm-option',
                },
              ],
            },
            {
              text: 'Radio',
              collapsed: true,
              items: [
                {
                  text: 'Radio',
                  link: '/components/radio/prizm-radio',
                },
                {
                  text: 'Radio group',
                  link: '/components/radio/prizm-radio-group',
                },
                {
                  text: 'Radio button',
                  link: '/components/radio/prizm-radio-button',
                },
              ],
            },
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
            { text: 'Skeleton', link: '/components/prizm-skeleton' },
            { text: 'Pagination', link: '/components/prizm-pagination' },
            { text: 'Tag', link: '/components/prizm-tag' },
            {
              text: 'Collapse',
              collapsed: true,
              items: [
                {
                  text: 'Collapse',
                  link: '/components/collapse/prizm-collapse',
                },
                {
                  text: 'Collapse item',
                  link: '/components/collapse/prizm-collapse-item',
                },
              ],
            },
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
            {
              text: 'Tabs',
              collapsed: true,
              items: [
                {
                  text: 'Tabs',
                  link: '/components/tabs/prizm-tabs',
                },
                {
                  text: 'Tab-pane',
                  link: '/components/tabs/prizm-tab-pane',
                },
              ],
            },
            {
              text: 'Dropdown',
              collapsed: true,
              items: [
                {
                  text: 'Dropdown',
                  link: '/components/dropdown/prizm-dropdown',
                },
                {
                  text: 'Dropdown menu',
                  link: '/components/dropdown/prizm-dropdown-menu',
                },
                {
                  text: 'Dropdown item',
                  link: '/components/dropdown/prizm-dropdown-item',
                },
              ],
            },
            { text: 'Anchor', link: '/components/prizm-anchor' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/garaev-vadim-m' }],
    
    search: {
      provider: 'local'
    }
  },
});
