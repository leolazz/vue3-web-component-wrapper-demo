import { defineConfig } from 'vite';
import { userConfigObject } from './vite.config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  ...userConfigObject,
  plugins: [...userConfigObject.plugins, vue({ customElement: true })],
});
