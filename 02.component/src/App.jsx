import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubox from './components/Menubox'

/*
1.Component(컴포넌트)
- UI를 구성하는 최소 단위
- 컴포넌트를 만들 때는 파일명을 반드시 대문자로 시작해야 함

2. props(프로퍼티)
- 리액트는 상위에서 하위로 데이터를 전달하는 방식(단방향)
- 값을 전달하는 방식은 객체({key: value})로 전달
*/
function App() {

  return (
    <>
      {/* <div>
        <h1>아메리카노</h1>
        <p>2500</p>
      </div> */}
      {/* <div>
        <h1>카페라떼</h1>
        <p>2500</p>
      </div>
      <div>
        <h1>바닐라라떼</h1>
        <p>4000</p>
      </div> */}
      <Menubox menuName={"아메리카노"} price={2500}/>
      <Menubox menuName={"카페라떼"} price={2500}/>
      <Menubox menuName={"바닐라라떼"} price={4000}/>

    </>
  )
}

export default App
