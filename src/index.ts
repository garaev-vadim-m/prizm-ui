import './style.scss';
export * from './components';
export * from './shared/icon';

import { createApp } from 'vue';
import index from './index.vue';
const app = createApp(index);
app.mount('#app');
