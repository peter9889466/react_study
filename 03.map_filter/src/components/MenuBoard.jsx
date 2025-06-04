import React, { useState } from 'react'
import MenuItem from './MenuItem'
import MenuNav from './MenuNav'
import menuData from '../assets/data/coffee_menu.json'

export const MenuBoard = () => {
    const [menus, setMenus] = useState(menuData)

    const menuFilter = (category) => {
        if (category === 'All') {
            setMenus(menuData)
        } else {
            const filtered = menuData.filter((menu) => menu.category === category)
            setMenus(filtered)
        }
    }
    return (
        <div className='menu-board'>
            <h1>메뉴판</h1>
            <MenuNav filter={menuFilter} />
            <div className='menu-list'>
                {menus.map((menu) => (
                    <MenuItem key={menu.id} menu={menu} />
                ))}
            </div>
        </div>
    )
}

export default MenuBoard
