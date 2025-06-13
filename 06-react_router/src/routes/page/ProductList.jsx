import React from 'react'
import { useNavigate } from 'react-router'

const ProductList = () => {

    const navigate = useNavigate();

    const goHome =() => {
        navigate("/");
    }

    const goToProduct = (e) => {
        if(e.target.innerText === "ProductDetail 이동"){
            navigate("/productDetail/1")
        }else{
            navigate("/productDetail2?pro_no=15&cate=pants")
        }
    }
    return (
        <div>
            <h1>ProductList 페이지</h1>
            <button onClick={goHome}>Home 이동</button>
            <button onClick={goToProduct}>ProductDetail 이동</button>
            <button onClick={goToProduct}>ProductDetail2 이동</button>
        </div>
    )
}

export default ProductList