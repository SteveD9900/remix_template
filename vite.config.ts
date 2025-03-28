import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { resolve } from 'path';
import tsconfigPaths from "vite-tsconfig-paths";

// declare module "@remix-run/node" {
//   interface Future {
//     v3_singleFetch: true;
//   }
// }

export default defineConfig({
  plugins: [
    remix({
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ],
  ssr: {
    noExternal: []
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true // for Vite to handle mixed ESM + CSJ modules in the app
    }
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './app')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  }
});
