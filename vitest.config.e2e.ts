import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [svelte({ compilerOptions: { hmr: !process.env.VITEST } })],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['test/e2e/**/*.{test,spec}.ts'],
  },
});
