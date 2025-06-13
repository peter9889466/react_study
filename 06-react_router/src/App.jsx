import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import About from './routes/page/About'
import Home from './routes/page/Home'
import Login from './routes/page/Login'
import MyPage from './routes/page/MyPage'
import ProductDetail from './routes/page/ProductDetail'
import ProductDetail2 from './routes/page/ProductDetail2'
import ProductList from './routes/page/ProductList'

function App() {
  // Routes의 역할
  // 사용자가 요청한 url 중 일치하는 컴포넌트를 렌더링해주는 컴포넌트
  // Route 역할
  // path에 정의된 요청이 들어왔을 때 element에 정의된 컴포넌트를 렌더링하는 역할
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate === true ? <MyPage /> : <Navigate to={'/login'} />;
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/productlist' element={<ProductList />} />

      {/* 
        [페이지 이동 시 데이터를 전달하는 방식 2가지]
        useParam()
        - 요청URL 경로에서 동적 세그먼트(/path:/key)를 가져오는 방ㅅ익
        ex) /product/1 -> {pro_no:1} 반환
        - 활용 : 블로그 포스트ID, 회원ID, 상품ID 등

        useSearchParams()
        - 요청URL 경로에서 쿼리스트링(?key:value)를 가져오는 방식
        ex) /product?pro_no=1 -> query.get("pro_no")로 값 추출
        - 활용 : 검색어, 정렬, 필터 등
      */}
      <Route path='/productDetail/:pro_no' element={<ProductDetail />} />
      <Route path='/ProductDetail2' element={<ProductDetail2 />} />

      {/* <Route path='/mypage' element={<MyPage/>}/> */}
      <Route path='/mypage' element={<PrivateRoute />} />
      <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>

    </Routes>
  )
}

export default App
