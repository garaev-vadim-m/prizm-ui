import './style.scss';
export * from './components';
export * from './shared/icon';
export type { FormInstance, FormRules } from 'element-plus';

import { createApp } from 'vue';
import index from './index.vue';
const app = createApp(index);
app.mount('#app');
