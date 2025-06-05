import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MapArrayExam from './components/MapArrayExam'
import MapObjectExam from './components/MapObjectExam'
import FilterExam from './components/FilterExam';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // 🔸 React Router 불러오기
import MenuBoard from './components/MenuBoard'

function App() {

  return (
    <>
      {/* <MapArrayExam/> */}
      {/* <MapObjectExam/> */}
      {/* <FilterExam/> */}
      <MenuBoard/>
    </>
  )
}

export default App
