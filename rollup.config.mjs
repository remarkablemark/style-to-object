import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

/**
 * Build rollup config for development or production.
 */
const getConfig = (minify = false) => ({
  input: 'index.js',
  output: {
    file: `dist/style-to-object${minify ? '.min' : ''}.js`,
    format: 'umd',
    name: 'StyleToObject',
    sourcemap: true
  },
  plugins: [commonjs(), resolve(), minify && terser()]
});

const configs = [getConfig(), getConfig(true)];

export default configs;
