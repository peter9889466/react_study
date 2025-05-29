import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubox from './components/Menubox'
import MemberInfo from './components/MemberInfo'
import Count from './components/count'

/*
1.Component(컴포넌트)
- UI를 구성하는 최소 단위
- 컴포넌트를 만들 때는 파일명을 반드시 대문자로 시작해야 함

2. props(프로퍼티)
- 리액트는 상위에서 하위로 데이터를 전달하는 방식(단방향)
- 값을 전달하는 방식은 객체({key: value})로 전달
ex) <Menubox menuName={"아메리카노"} price={2500}/>
-> {menuName: "아메리카노", price: 2500} 형태로 생성한 후 하위 컴포넌트로 전달
- 상위 컴포넌트로부터 전달받은 값을 담고있는 객체
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
      {/* <Menubox menuName={"아메리카노"} price={2500}/>
      <Menubox menuName={"카페라떼"} price={2500}/>
      <Menubox menuName={"바닐라라떼"} price={4000}/> */}

      {/* <div className='App'>
      <MemberInfo team={"KIA 타이거즈"} memberName={"강병우"}/>
      <MemberInfo team={"SSG 랜더스"} memberName={"김광현"}/>
      <MemberInfo team={"두산 베어스"} memberName={"곽빈"}/>
      <MemberInfo team={"한화 이글스"} memberName={"류현진"}/>
    </div> */}

    <Count/>
    </>
  )
}

export default App
