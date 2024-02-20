import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


/** @type {import('vite').UserConfig} */
export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
      sourcemap: true,
    },
    plugins: [react({include: ['**/*.tsx']})],
  };
});