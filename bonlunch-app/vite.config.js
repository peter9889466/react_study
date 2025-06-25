import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //base: '/' <- 이건 기본값이라 있던 없던 동일

  plugins: [react()],
  //2. server의 proxy설정
  // 기본적으로 리액트가 사용하는 포트번호가 5173, 스프링부트가 8088이다.
  //  그런데 다른 포트에서 오는 건 'cross-origin' 즉, 다른 origin으로 간주하고 이를 차단하면서 cors 오류가 발생한다.
  //  이를 해결하기 위해 proxy를 설정해서
  server: {
    proxy: {
      '/api': 'http://3.38.251.139:8088'
    }
  }
})
