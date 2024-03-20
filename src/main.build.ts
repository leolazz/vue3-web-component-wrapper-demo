import { router } from './main.routes';
import App from './App.vue';
import { createWebComponent } from 'vue-web-component-wrapper';
import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
} from 'vue';
import style from './style.css';

export const pluginsWrapper = {
  install(GivenVue: any) {
    const Vue = GivenVue;
    Vue.use(router);
  },
};

createWebComponent({
  rootComponent: App,
  elementName: 'wc-test',
  plugins: pluginsWrapper,
  cssFrameworkStyles: style,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
});
