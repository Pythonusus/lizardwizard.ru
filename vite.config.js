import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "pages/index.html",
        // add other pages here
        // about: "pages/about.html",
        // contacts: "pages/contacts.html",
      },
    },
  },
  server: {
    port: 3000,
    open: "/pages/index.html",
  },
});
