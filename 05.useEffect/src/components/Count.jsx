import React, { useEffect, useState } from 'react'
import Timer from './Timer';


const Count = () => {

    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [showTimer, setShowTimer] = useState(true);
    const handleClick = () => {
        setValue(value + 1);

    }
    const handleClick2 = () => {
        setValue2(value2 + 2);
    }

    useEffect(() => {
        console.log("앱 시작!")
    }, [])

    useEffect(() => {
        console.log("업데이트!")
    }, [value])

    useEffect(() => {
        console.log("업데이트2!")
    }, [value2])

    useEffect(() => {
        console.log("업데이트3!")
    }, [value, value2])




    return (
        <div>
            <h1>useEffect() 실습</h1>
            <p>{value}</p>
            <p>{value2}</p>
            <button onClick={handleClick}>증가</button>
            <button onClick={handleClick2}>증가2</button>
            <hr />
            <button onClick={() => setShowTimer(!showTimer)}>타이머 보이기</button>
            {showTimer && <Timer/>}
        </div>
    )
}

export default Count