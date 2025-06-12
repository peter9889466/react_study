import React from 'react'
import { useNavigate } from 'react-router'

const ProductList = () => {
    const navigate = useNavigate();
    const goHome =() => {
        navigate("/");
    }
    return (
        <div>
            <h1>ProductList 페이지</h1>
            <button onClick={goHome}>Home 이동</button>
        </div>
    )
}

export default ProductList