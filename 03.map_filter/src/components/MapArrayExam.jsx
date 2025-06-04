import React from 'react'

export const MapArrayExam = () => {
    // map() 함수
    // - 배열 안에 들어있는 요소들을 순차적으로 접근한 후 새로운 배열로 반환하는 함수
    // - 기존 배열은 밴경하지 않고 새로운 배열만 반환
    let numbers = [1, 2, 3, 4, 5];
    return (
        <div>
            {numbers}
            {/* map()함수 사용시, key속성에 고유한 값을 반드시 넣어줘야 함 */}
            {/* 없는 경우 */}
            {numbers.map((item,index) => (
                <div key={index}>{index}번째 요소 : {item}</div>
            ))}
        </div>
    )
}

export default MapArrayExam