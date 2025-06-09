import React, { useState, useRef } from 'react'

export const RefExam = () => {

    let countVar = 0;
    let [countState, setcountState] = useState(0);
    let countRef = useRef(0);

    const handleClick = () => {
        countVar += 1;
    }

    const handleClick2 = () => {
        setcountState(countState + 1);
    }

    const handleClick3 = () => {
        countRef.current += 1;
    }
    const printState = () => {
        console.log(`countVar : ${countVar}`)
        console.log(`countState : ${countState}`)
        console.log(`countRef.current : ${countRef.current}`);

    }
    return (
        <>
            <h1>Ref 실습</h1>
            <div>
                <p>var : {countVar}</p>
                <p>state : {countState}</p>
                <p>ref : {countRef.current}</p>
            </div>
            <div>
                <button onClick={handleClick}>var증가</button>
                <button onClick={handleClick2}>state증가</button>
                <button onClick={handleClick3}>ref증가</button>
                <button onClick={printState}>출력</button>
            </div>
        </>
    )
}

export default RefExam;