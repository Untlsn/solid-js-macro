import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { provideRef } from './macros/reactive';
import { vitePluginMacro } from 'vite-plugin-macro';
import { join } from 'path';

const macro = vitePluginMacro({
  typesPath: join(__dirname, './macros.d.ts'),
})
  .use(provideRef())
  .toPlugin();

export default defineConfig({
  plugins: [solidPlugin(), macro],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      'reactive-macro': join(__dirname, './macros/reactive.root'),
    }
  }
});
