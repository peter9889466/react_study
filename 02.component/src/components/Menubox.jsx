import React from 'react'

const Menubox = (props) => {

    console.log("app 컴포넌트에서 전달 받은 값", props)

    return (
        <div>
            <h1>{props.menuName}</h1>
            <p>{props.price}</p>
        </div>
    )
}

export default Menubox