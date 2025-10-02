import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const getUMDConfig = (minify = false) => ({
  input: 'src/index.ts',

  output: {
    file: `dist/style-to-object${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'StyleToObject',
    sourcemap: true,
  },

  plugins: [
    commonjs(),
    resolve(),
    typescript({
      declaration: false,
      declarationMap: false,
      module: 'esnext',
      compilerOptions: {
        outDir: 'dist',
      },
    }),
    minify && terser(),
  ],
});

const getESMConfig = () => ({
  input: 'src/index.ts',

  output: {
    file: 'esm/index.mjs',
    format: 'es',
    sourcemap: true,
  },

  plugins: [
    resolve(),
    typescript({
      declaration: false,
      declarationMap: false,
      module: 'esnext',
      compilerOptions: {
        outDir: 'esm',
      },
    }),
  ],

  external: ['inline-style-parser'],
});

const configs = [getUMDConfig(), getUMDConfig(true), getESMConfig()];

export default configs;
