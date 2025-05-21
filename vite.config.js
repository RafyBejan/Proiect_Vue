import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Proiect An Vue API",
        short_name: "VueAPI",
        description: "O aplicație progresivă pentru gestionarea produselor.",
        theme_color: "#FD3D57",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/vite.svg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/vite.svg",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 5173,
    fs: {
      allow: [".."],
    },
  },
});