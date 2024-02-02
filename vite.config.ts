import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const resolve = (dir: string) => path.join(__dirname, dir)
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve('src'),
    }
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // 不生成 source map
    minify: 'terser' // 混淆器
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/globalMixin.scss";'
      }
    }
  },
  server: {
    //服务器主机名
    host: 'localhost',
    //端口号
    port: 3088,
    //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
    open: false,
    //自定义代理规则
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
