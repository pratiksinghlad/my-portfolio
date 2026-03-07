import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import viteCompression from "vite-plugin-compression";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      overlay: false,
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz", // File extension for Gzip compressed files
      threshold: 1024,
    }),
    {
      name: "copy-index-to-404",
      closeBundle() {
        const buildDir = path.resolve(process.cwd(), "build");
        const indexHtml = path.resolve(buildDir, "index.html");
        const errorHtml = path.resolve(buildDir, "404.html");
        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, errorHtml);
        }
      },
    },
  ],
  server: {
    port: 3001, // <- Change this to any port you want
  },
  resolve: {
    preserveSymlinks: true,
  },
  // Ensure proper handling of asset files
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg", "**/*.gif", "**/*.webp"],
  base: "/",
  build: {
    outDir: "build",
  },
});
