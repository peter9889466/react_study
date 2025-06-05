import React from 'react'

export const MenuNav = ({ filter }) => {

    const categorys = ['All', '커피', '디저트', '에이드', '베이커리']
    return (

        <div>
            <ul className='menu-nav'>
                {categorys.map((cate, index) => (
                    <li
                        key={index}
                        onClick={() => filter(cate)}
                    >{cate}</li>
                ))}
            </ul>

        </div>
    )
}


export default MenuNav