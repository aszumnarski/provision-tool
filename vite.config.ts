import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `provision-tool-${process.env.npm_package_version}.js`,
        chunkFileNames: `provision-tool-${process.env.npm_package_version}.js`,
        assetFileNames: `provision-tool-${process.env.npm_package_version}.[ext]`,
      },
    },
  },
});
