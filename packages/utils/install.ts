 import type { App, Plugin } from 'vue';
 import { each } from 'lodash-es';

 type SFCWithInstall<T> = T & Plugin;

 export function makeInstaller(components: Plugin[]) {
   const install = (app: App) => {
     each(components, (c) => app.use(c));
   };
   return install as Plugin;
 }

 export const withInstall = <T>(comp: T) => {
   (comp as SFCWithInstall<T>).install = (app: App) => {
     const name = (comp as any).name;
     // setGlobalConfig({ prefix: 'El' });
     // registerComponent(app, comp as typeof ElButton);
     app.component(name, comp as Plugin);
   };
   return comp as SFCWithInstall<T>;
};