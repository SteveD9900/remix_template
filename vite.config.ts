import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
  ],
  ssr: {
    noExternal: []
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true // for Vite to handle mixed ESM + CSJ modules in the app
    }
  }
});
