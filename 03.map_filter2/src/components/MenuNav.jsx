import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', '커피', '디저트', '에이드', '베이커리'];

export const MenuNav = () => {
    return (
        <div>
            <ul className="menu-nav">
                {categories.map((cate, index) => {
                    const path = cate === 'All' ? '/menus' : `/menus/${cate}`;
                    return (
                        <li key={index}>
                            <Link className='li-link' to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                {cate}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MenuNav;
