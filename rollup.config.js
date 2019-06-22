import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

const config = {
  input: 'index.js',
  output: {
    format: 'umd',
    name: 'StyleToObject'
  },
  plugins: [resolve(), commonjs()]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify({}, minify));
}

export default config;
