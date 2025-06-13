import React from 'react'
import { useNavigate } from 'react-router'

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const goHome = () => {
        setAuthenticate(true);
        navigate("/");
        
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={goHome}>로그인</button>
        </div>
    )
}

export default Login