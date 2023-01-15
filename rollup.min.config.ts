import nodeResolve from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';
import typeScript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const output = { dir: 'bin_min', format: 'cjs' };
const plugins = [
   nodeResolve(),
   commonJs(),
   typeScript({ tsconfig: "tsconfig.json" }),
   terser(),
];

export default [{
   input: ['src/background.ts', 'src/main.ts'],
   output,
   plugins
}];