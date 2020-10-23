import serve from 'rollup-plugin-serve'

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
        serve({
            openPage: './index.html',
            contentBase: '',
            port: 9002
        }),
    ]
}