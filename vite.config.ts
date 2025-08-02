import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import viteCompression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Include JSX runtime
      jsxRuntime: "automatic",
    }),
    svgr(),
    checker({
      typescript: true,
      overlay: {
        initialIsOpen: false,
      },
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],
  server: {
    port: 3001,
    hmr: true,
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@assets": resolve(__dirname, "src/assets"),
      "@styles": resolve(__dirname, "src/assets/styles"),
      "@i18n": resolve(__dirname, "src/i18n"),
    },
  },
  // Ensure proper handling of asset files
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg", "**/*.gif", "**/*.webp"],
  base: "/my-portfolio/",
  build: {
    outDir: "build",
    // Enable minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          mui: ["@mui/material", "@mui/icons-material"],
          i18n: ["i18next", "react-i18next", "i18next-browser-languagedetector"],
          fontawesome: [
            "@fortawesome/react-fontawesome",
            "@fortawesome/free-brands-svg-icons",
            "@fortawesome/free-regular-svg-icons",
            "@fortawesome/free-solid-svg-icons",
          ],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging
    sourcemap: false,
  },
  preview: {
    port: 4173,
  },
});
