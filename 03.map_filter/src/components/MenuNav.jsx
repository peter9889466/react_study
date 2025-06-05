import React from 'react'
import { Link } from 'react-router-dom'; // 🔸 <Link>로 경로 이동 처리

export const MenuNav = ({ filter }) => {

    const categorys = ['All', '커피', '디저트', '에이드', '베이커리']
    return (

        <div>
            <ul className='menu-nav'>
                {categorys.map((cate, index) => (
                    <li
                        key={index}
                        onMouseOver={() => filter(cate)}
                    >{cate}</li>
                ))}
            </ul>

        </div>
    )
}


export default MenuNav