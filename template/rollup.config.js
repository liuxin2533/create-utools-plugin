import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import clear from 'rollup-plugin-clear';

export default {
  input: 'preload.js',
  output: {
    dir: 'dist',
    entryFileNames: 'preload.js',
    format: 'cjs',
    manualChunks: {
      'lib/lodash': ['lodash'],
    },
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    copy({
      targets: [{src: 'public/*', dest: 'dist'}],
      verbose: true,
    }),
    clear({
      targets: ['dist'],
      watch: true,
    }),
  ],
  external: [
    'electron',
  ],
  watch: {
    include: ['src/**'],
    exclude: ['node_modules/**'],
  },
};
