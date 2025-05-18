import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from "vite-plugin-checker";
import viteCompression from 'vite-plugin-compression';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        dev: {
          logLevel: ['error']
        }
      },
      overlay: false,
    }),
    viteCompression({
      algorithm: 'brotliCompress', 
      ext: '.br',                 
      threshold: 1024,           
    }),
    viteCompression({
      algorithm: 'gzip',         
      ext: '.gz',                  // File extension for Gzip compressed files
      threshold: 1024,
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
