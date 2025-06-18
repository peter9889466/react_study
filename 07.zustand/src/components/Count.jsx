import React from 'react'
import CountBox from './CountBox';
import { useState } from 'react';
import useCountStore from '../stores/useCountStore';

const Count = () => {
    // const [count, setCount] = useState(0);
    const { count, increase, increaseBy, decrease, decreaseBy, multiple, divide } = useCountStore();
    const handleAddBtn = () => {
        increase();
    }

    const handleSubBtn = () => {
        decrease();
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleAddBtn}>증가 1</button>
            <button onClick={() => increaseBy(10)}>증가 10</button>
            <button onClick={handleSubBtn}>감소 1</button>
            <button onClick={() => decreaseBy(10)}>감소 10</button>
            <button onClick={() => multiple(10)}>곱하기 10</button>
            <button onClick={() => divide(10)}>나누기 10</button>

            <CountBox />
        </div>
    )
}

export default Count