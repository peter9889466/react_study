import React from 'react'

const Button = ({ onClick, children, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`border px-4 py-1 rounded hover:bg-gray-100 ${className}`}>
            {children}
        </button>
    );
};

export default Button