import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/themes/diary/',
  plugins: [reactRefresh()],
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
