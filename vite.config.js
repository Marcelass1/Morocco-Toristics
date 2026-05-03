import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        marrakech: resolve(__dirname, 'marrakech.html'),
        chefchaouen: resolve(__dirname, 'chefchaouen.html'),
        sahara: resolve(__dirname, 'sahara.html'),
        fes: resolve(__dirname, 'fes.html'),
        casablanca: resolve(__dirname, 'casablanca.html'),
        rabat: resolve(__dirname, 'rabat.html'),
        essaouira: resolve(__dirname, 'essaouira.html'),
        tangier: resolve(__dirname, 'tangier.html'),
      },
    },
  },
});
