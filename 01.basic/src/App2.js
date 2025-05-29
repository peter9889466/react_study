import "./App2.css";
import React from 'react'

const App2 = () => {
    let name = prompt("이름을 입력하세요");
    if (!name) 
        name = "null";
    
    let today = new Date();
    console.log(today);
    console.log(today.toLocaleDateString());
    console.log(today.getMonth());

    let month = today.getMonth() + 1; 
    switch (today.getMonth() + 1) {
        case 3: case 4: case 5:
            month = "봄";
            break;
        case 6: case 7: case 8:
            month = "여름";
            break;
        case 9: case 10: case 11:
            month = "가을";
            break;
        case 12: case 1: case 2:
            month = "겨울";
            break;
        default:
            month = "잘못된 입력";
            break;
    }

    return (
        <div className="App2Css">
            <h1>{today.toLocaleDateString()}</h1>
            <hr />
            <div>{name}님 지금은 {month}입니다. 좋은 하루 보내세요 :)</div>
        </div>
    )
}

export default App2