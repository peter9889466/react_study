import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MenuBoard from './components/MenuBoard';
import WorldMap from './components/WorldMap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/menus" />} />
        <Route path="/menus" element={<MenuBoard />} />
        <Route path="/menus/:category" element={<MenuBoard />} />
      </Routes>
    </Router>
    //------------------------
    // <div className="App">
    //   <h1 style={{ textAlign: 'center', padding: '20px' }}>World Map 예제</h1>
    //   <WorldMap style={{width:'300px'}}/>
    // </div>
  );
}

export default App;
