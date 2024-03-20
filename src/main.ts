import { router } from './main.routes';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const p = createApp(App);

p.use(router);
p.mount('#app');
