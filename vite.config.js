import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        // add more pages here as you create them
        // about: resolve(__dirname, "src/about.html"),
        // contacts: resolve(__dirname, "src/contacts.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
});
