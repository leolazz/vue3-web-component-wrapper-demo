import { defineConfig, PluginOption, UserConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export const userConfigObject: UserConfig = {
  build: {
    lib: {
      entry: './src/main.build.ts',
      name: 'wc-test',
      fileName: 'wc-test',
    },
    sourcemap: 'inline',
  },
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true,
    }),
  ],
  // resolve: {
  //   alias: {'@': fileURLToPath(new URL('./src', import.meta.url))}
  // }
};

export default defineConfig({
  ...userConfigObject,
  plugins: [...(userConfigObject.plugins as PluginOption[]), vue()],
});
