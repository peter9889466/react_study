import React from 'react'

const Count = ({ }) => {
    const [count, setCount] = React.useState(0);
    const increase = () => {
        setCount(count + 1);
        console.log(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
        console.log(count - 1);
    }
    const reset = () => {
        setCount(0);
        console.log(0);
    }
    const increaseTen = () => {
        setCount(count + 10);
        console.log(count + 10);
    }
    const decreaseTen = () => {
        setCount(count - 10);
        console.log(count - 10);
    }

    return (
        <div >
            <div>
                <h1>일반변수 : {count}</h1>
                <button onClick={increase}>증가</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={increaseTen}>10증가</button>
                <br /> <br />
                <button onClick={decrease}>감소</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={decreaseTen}>10감소</button>
                <br /> <br />
                <button onClick={reset}>초기화</button>
                <br /> <br />
                <button onClick={() => setCount(100)}>100으로 설정</button>
            </div>
        </div>
    )
}

export default Count
