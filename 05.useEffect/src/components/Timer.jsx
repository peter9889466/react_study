import React, { useEffect } from 'react'

const Timer = () => {

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("1초마다 실행");
            
        }, 1000); 
        return () => {
            clearInterval(interval);
            console.log("타이머종료");
            
        }
    },[])

    return (
        <div>Timer</div>
    )
}

export default Timer