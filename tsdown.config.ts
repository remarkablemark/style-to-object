import { defineConfig } from 'tsdown';

export default defineConfig([
  // ESM build
  {
    entry: 'src/index.ts',
    format: 'esm',
    outDir: 'esm',
    dts: true,
    sourcemap: true,
    external: ['inline-style-parser'],
  },

  // CJS build
  {
    entry: 'src/index.ts',
    format: 'cjs',
    outDir: 'cjs',
    dts: true,
    sourcemap: true,
    external: ['inline-style-parser'],
    outExtensions() {
      return {
        js: '.js',
        dts: '.ts',
      };
    },
  },

  // UMD build (unminified)
  {
    entry: 'src/index.ts',
    format: 'umd',
    outDir: 'dist',
    globalName: 'StyleToObject',
    sourcemap: true,
    noExternal: ['inline-style-parser'],
    outputOptions: {
      entryFileNames: 'style-to-object.js',
    },
  },

  // UMD build (minified)
  {
    entry: 'src/index.ts',
    format: 'umd',
    outDir: 'dist',
    globalName: 'StyleToObject',
    sourcemap: true,
    minify: true,
    noExternal: ['inline-style-parser'],
    outputOptions: {
      entryFileNames: 'style-to-object.min.js',
    },
  },
]);
