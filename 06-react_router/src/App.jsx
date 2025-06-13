import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './routes/page/Home'
import About from './routes/page/About'
import ProductList from './routes/page/ProductList'


function App() {
  // Routes의 역할
  // 사용자가 요청한 url 중 일치하는 컴포넌트를 렌더링해주는 컴포넌트
  // Route 역할
  // path에 정의된 요청이 들어왔을 때 element에 정의된 컴포넌트를 렌더링하는 역할
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path='/productlist' element={<ProductList/>}/>
    </Routes>
  )
}

export default App
