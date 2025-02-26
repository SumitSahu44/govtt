import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enables external network access or sets 'localhost' explicitly
    port: 5173, // Default port (change if needed)
  },
  css: {
    postcss: './postcss.config.cjs', // Ensure this points to your PostCSS config
  },
});
