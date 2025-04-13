import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import cssInjected from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [vue(), cssInjected()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PrizmUI',
      fileName: (format) => `prizm-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
    },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
