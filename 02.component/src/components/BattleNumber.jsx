import React from 'react'
import { useState } from 'react'

// 1 2 3 버튼을 누르는 순간 랜덤 숫자 생성
// 그 즉시 내가 누른 버튼과 랜덤 버튼 숫자 비교 후 
// 정다이면 "정답입니다" 출력
// 오답이면 "오답입니다" 출력
const getRandomNumber = () => {
    return parseInt(Math.random() * 3) + 1;
}

export const BattleNumber = () => {
    const [userNumber, setUserNumber] = useState(0);
    const [result, setResult] = useState('');

    const handleButtonClick = (number) => {
        const randomNumber = getRandomNumber();
        setUserNumber(number);
        console.log(`랜덤 숫자: ${randomNumber}, 내가 선택한 숫자: ${number}`);
        if (number === randomNumber) {
            setResult('정답입니다');
        } else {
            setResult('오답입니다');
        }
    }

    return (
        <div className='battleNumber'>
            <h1>BattleNumber</h1>
            <div className="battleBtn">
                <button onClick={() => handleButtonClick(1)}>1</button>
                <button onClick={() => handleButtonClick(2)}>2</button>
                <button onClick={() => handleButtonClick(3)}>3</button>
            </div>
            <p>내가 선택한 숫자: {userNumber}</p>
            <p>{result}</p>
        </div>
    )
}

export default BattleNumber