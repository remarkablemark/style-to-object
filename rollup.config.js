import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

const config = {
  input: 'index.js',
  output: {
    format: 'umd',
    name: 'StyleToObject'
  },
  plugins: [commonjs(), resolve()]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify());
}

export default config;
