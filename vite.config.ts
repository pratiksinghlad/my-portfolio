import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      overlay: false,
    }),
  ],
  resolve: {
    preserveSymlinks: true,
  },
  // Ensure proper handling of asset files
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif', '**/*.webp'],
  base: '/my-portfolio/',
  build: {
    outDir: 'build',
  },
});
