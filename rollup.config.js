import serve from 'rollup-plugin-serve'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve' // 外部依赖打包到项目
import commitjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser' // 混淆js
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-postcss'

import nodePolyFills from 'rollup-plugin-node-polyfills'

// rollup可以帮我们打包 es6的模块化语法
export default {
    input: './src/index.js',
    output: {
        file: './dist/datav.js',
        format: 'umd',
        name: 'datav',
        // sourcemap: true,
        globals: {
            vue: 'Vue',
        }
    },
    plugins: [
        // nodePolyFills(),
        resolve({
            // preferBuiltins: false,  // Default: true
        }),
        commitjs(),
        serve({
            openPage: './index.html',
            contentBase: '',
            port: 9002
        }),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            plugins: [
                ['@babel/plugin-transform-runtime', {
                    regenerator: true
                }]
            ]
        }),
        json(),
        vue(),
        css({
            plugins: []
        }),
        terser(),
    ],
    // 那些模块是外部变量，可以不打包的js中，减小体积
    external: ['vue', 'echarts', 'lodash']
}