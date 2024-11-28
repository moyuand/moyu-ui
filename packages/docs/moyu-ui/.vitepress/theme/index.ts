 import type { App } from 'vue';
 import { ElementPlusContainer } from '@vitepress-preview/component';
 import DefaultTheme from 'vitepress/theme';
 import MoyuUi from 'moyu-ui';

 import "@vitepress-preview/component/_product/style.css"
 import 'moyu-ui/dist/index.css';

 export default {
   ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer)
    app.use(MoyuUi);
   },
 }