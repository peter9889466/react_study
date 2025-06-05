import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuItem from './MenuItem';
import MenuNav from './MenuNav';
import menuData from '../assets/data/coffee_menu.json';

export const MenuBoard = () => {
    const { category } = useParams();
    const [menus, setMenus] = useState(menuData);
    const [animateClass, setAnimateClass] = useState('fade-up');

    useEffect(() => {
        setAnimateClass('fade-down'); // 일단 사라지게

        const timer = setTimeout(() => {
            const filtered =
                !category || category === 'All'
                    ? menuData
                    : menuData.filter((menu) => menu.category === category);

            setMenus(filtered);         // 메뉴 필터링
            setAnimateClass('fade-up'); // 다시 등장
        }, 600); // 애니메이션 길이와 맞춤

        return () => clearTimeout(timer);
    }, [category]);

    return (
        <div className='menu-board'>
            <h1 style={{ paddingBottom: '10px' }}>메뉴판</h1>
            <MenuNav />
            <div className={`menu-list ${animateClass}`}>
                {menus.map((menu) => (
                    <MenuItem key={menu.id} menu={menu} />
                ))}
            </div>
        </div>
    );
};

export default MenuBoard;
