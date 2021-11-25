/* eslint-disable */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@packages', replacement: path.resolve(__dirname, './packages') },
    ],
  },
});
