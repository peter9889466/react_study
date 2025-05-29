import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubox from './components/Menubox'

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
      <Menubox />
      <Menubox />
      <Menubox />

    </>
  )
}

export default App
