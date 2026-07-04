import { defineConfig, type UserConfig } from 'tsdown';

const entry = 'src/index.ts';
const sourcemap = true;
const external = ['inline-style-parser'];

const baseConfig = {
  entry,
  sourcemap,
  deps: {
    neverBundle: external,
  },
} satisfies UserConfig;

const umdBase = {
  ...baseConfig,
  format: 'umd' as const,
  outDir: 'dist',
  globalName: 'StyleToObject',
  deps: {
    alwaysBundle: external,
  },
};

export default defineConfig([
  // ESM build
  {
    ...baseConfig,
    format: 'esm',
    outDir: 'esm',
    dts: true,
  },

  // CJS build
  {
    ...baseConfig,
    format: 'cjs',
    outDir: 'cjs',
    dts: true,
    outExtensions() {
      return {
        js: '.js',
        dts: '.ts',
      };
    },
  },

  // UMD build (unminified)
  {
    ...umdBase,
    outputOptions: {
      entryFileNames: 'style-to-object.js',
    },
  },

  // UMD build (minified)
  {
    ...umdBase,
    minify: true,
    outputOptions: {
      entryFileNames: 'style-to-object.min.js',
    },
  },
]);
