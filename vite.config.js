import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/labexam/', // This MUST match your repository name for proper routing on GitHub Pages
  plugins: [react()],
});
