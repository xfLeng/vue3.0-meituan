/* eslint-disable */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');
import analyze from 'rollup-plugin-analyzer'
import { visualizer }  from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    vue(),
    analyze(),
    visualizer({
      filename: './dist/stats.html',
      template: 'treemap',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@packages', replacement: path.resolve(__dirname, './packages') },
    ],
  },
});
