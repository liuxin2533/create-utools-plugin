import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'bin',
  sourcemap: false,
  clean: true,
  dts: false,
  splitting: true,
  format: ['esm'],
  external: ['esbuild']
});
