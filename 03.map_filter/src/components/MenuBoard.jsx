import React, { useState } from 'react'
import MenuItem from './MenuItem'
import MenuNav from './MenuNav'
import menuData from '../assets/data/coffee_menu.json'

export const MenuBoard = () => {
    const [menus, setMenus] = useState(menuData);
    const [animateClass, setAnimateClass] = useState('fade-up');


    const menuFilter = (category) => {
        setAnimateClass('fade-down');
        setTimeout(() => {
            const filtered =
                category === 'All'
                    ? menuData
                    : menuData.filter((menu) => menu.category === category);
            setMenus(filtered);
            setAnimateClass('fade-up');
        }, 600);
    };
    return (
        <div className='menu-board'>
            <h1 style={{ paddingBottom: '10px' }}>메뉴판</h1>
            <MenuNav filter={menuFilter} />
            <div className={`menu-list ${animateClass}`}>
                {menus.map((menu) => (
                    <MenuItem key={menu.id} menu={menu} />
                ))}
            </div>
        </div>
    )
}

export default MenuBoard
