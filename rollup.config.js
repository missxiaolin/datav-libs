import serve from 'rollup-plugin-serve'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve' // 外部依赖打包到项目

// rollup可以帮我们打包 es6的模块化语法
export default {
    input: './src/index.js',
    output: {
        file: './dist/datav.js',
        format: 'umd',
        name: 'datav',
        sourcemap: true
    },
    plugins: [
        resolve(),
        serve({
            openPage: './index.html',
            contentBase: '',
            port: 9002
        }),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}