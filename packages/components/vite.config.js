import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
  ],
  build: {
    target: 'es2015',
    minify: 'terser',
    sourcemap: false,

    lib: {
      entry: 'src/index.js',
      name: 'Components',
      fileName: (format) => `components.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: (id) =>
        /^react|react-dom|@reduxjs\/toolkit|react-redux/.test(id),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@reduxjs/toolkit': 'ReduxToolkit',
          'react-redux': 'ReactRedux',
        },
      },
    },
  },
});
