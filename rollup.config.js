import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const config = {
  input: 'index.js',
  output: {
    format: 'umd',
    name: 'StyleToObject'
  },
  plugins: [commonjs(), resolve()]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser());
}

export default config;
