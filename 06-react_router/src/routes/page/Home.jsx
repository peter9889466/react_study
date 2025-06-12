import React from 'react'
import { Link } from 'react-router'

const Home = () => {
    return (
        <div>
            <h1>Home 페이지</h1>
            <Link to={"/About"}>About 페이지로 이동</Link>
            <br />
            <Link to={"/ProductList"}>ProductList 페이지로 이동</Link>
        </div>
    )
}

export default Home