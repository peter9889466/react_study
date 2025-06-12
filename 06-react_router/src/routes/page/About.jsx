import React from 'react'
import { Link } from 'react-router'

const About = () => {
    return (
        <div>
            <h1>About 페이지</h1>
            <Link to={"/"}>Home 페이지로 이동</Link>
        </div>
    )
}

export default About