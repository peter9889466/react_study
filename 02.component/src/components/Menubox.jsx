import React from 'react'

// const Menubox = (props) => {

//     console.log("app 컴포넌트에서 전달 받은 값", props)

//     return (
//         <div>
//             <h1>{props.menuName}</h1>
//             <p>{props.price}</p>
//         </div>
//     )
// }
const Menubox = ({ menuName, price }) => {
    // 구조분해 할당을 통해 props 객체에서 필요한 값만 추출

    console.log("app 컴포넌트에서 전달 받은 값", { menuName, price })

    return (
        <div>
            <h1>{menuName}</h1>
            <p>{price}</p>
        </div>
    )
}

export default Menubox