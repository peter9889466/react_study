import React, { useState } from 'react';
import './Carouse5.css';

const images = [
    'https://blog.kakaocdn.net/dn/bkWiKM/btrwIrssmwA/yc2834mBajsX74RMKDr0kK/img.png',
    'https://blog.kakaocdn.net/dn/bfMVOl/btrBqnl18Ht/lNUcXxgcWYKORUTtD1OdGk/img.png',
    'https://lh4.googleusercontent.com/proxy/ep6niUMYLhhDvJ5N0qT5s2F66hHXIrrUY7BH_li2PIZZhRSTRZpLbqbPJUlaGX4GQzjlGkgU57gbYyrtPfFV7k1QjgmH1cT9e0oLWb1cUU7_wHLAfE6_gBT9cIKduKhpxk6bdD0kKy3HcsELiGvlOKDUEn02'
];

function Carousel() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((current + 1) % images.length);
    const prev = () => setCurrent((current - 1 + images.length) % images.length);

    return (
        <div className="carousel-container">
            <button onClick={prev}>〈</button>
            <img src={images[current]} alt="carousel" />
            <button onClick={next}>〉</button>
        </div>
    );
}

export default Carousel;
