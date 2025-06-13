import React from 'react'
import { useNavigate, useParams } from 'react-router'

const ProductDetail = () => {
    const {pro_no} = useParams();
    const navigate = useNavigate();
    
    
    
    
    
    
    const goHome = () => {
        navigate("/");
    }
    return (
        <div>
            <h1>ProductDetail 페이지</h1>
            <h4>{pro_no}번 상품입니다</h4>
            <button onClick={goHome}>Home 이동</button>
        </div>
    )
}

export default ProductDetail