import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    build: {
        // 配置为库模式
        lib: {
            entry: './src/index.ts',  // 入口文件
            name: '@react-component-library/mobile',  // 库名称
            fileName: 'index',  // 输出文件名
            formats: ['es', 'cjs']  // 输出格式：ES Module 和 CommonJS
        },
        // 外部化 React 相关依赖，不打包进库文件
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                // 提供全局变量，用于 UMD 构建
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        },
        // 禁用生成 HTML 文件
        outDir: './dist',
    }
})
