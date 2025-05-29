import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//1313import App from './App';
//import App from './App2';
//import App from './App3Dice';
//import App from './App4Orbit';
//import App from './Carouse5';
//import App from './Counter';
import App from './Notion';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // StrictMode
  // 내부에 문제가 발생할만한 요소가 있는지 검사하는 기능
  // 개발모드에서 활성화되고, 실제 배포했을 경우(빌드)에는 비활성화
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
