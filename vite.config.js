import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/AppCarambar/', // Chemin de base pour GitHub Pages
});
