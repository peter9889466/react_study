import React, {useState} from 'react'

export default function Counter() {
    let countLet = 0;

    const increments = () => count++;
    const decrements = () => count--;

    const [num1, num2] = [1, 2];

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    return (
        <div>
            <h1>{countLet}</h1>
            <button onClick={increments}>+</button>
            <button onClick={decrements}>-</button>

            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

