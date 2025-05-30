import React, { useState } from 'react';
import './Notion.css';

const icons = [
    { name: "강윤지", src: require('./assets/icons/강윤지.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f18064ac46d0094c7d7408' },
    { name: "공소정", src: require('./assets/icons/공소정.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f1808a984fdea83fe1f6ac' },
    { name: "곽희돈", src: require('./assets/icons/곽희돈.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f180e3bfc8eb297bc0b733' },
    { name: "김경보", src: require('./assets/icons/김경보.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f180108d74e67f367c16aa' },
    { name: "김다원", src: require('./assets/icons/김다원.webp'), link: 'https://www.notion.so/sue019522/1c7505eec7f180ba93bbf7f2a06b3424' },
    { name: "김수연", src: require('./assets/icons/김수연.webp'), link: 'https://www.notion.so/sue019522/1c7505eec7f1806999dcc0cccb488fb7' },
    { name: "김승혁", src: require('./assets/icons/김승혁.webp'), link: 'https://www.notion.so/sue019522/1c7505eec7f180c3a75acbc786dc9bec' },
    { name: "김형진", src: require('./assets/icons/김형진.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f1802eb82bf5363709499d' },
    { name: "김희광", src: require('./assets/icons/김희광.webp'), link: 'https://www.notion.so/sue019522/1c7505eec7f1804fa296c79a4382563d' },
    { name: "서명우", src: require('./assets/icons/서명우.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f1809c8755df00baddc225' },
    { name: "안성민", src: require('./assets/icons/안성민.webp'), link: 'https://www.notion.so/sue019522/1c7505eec7f180c1b686e9d5c2da3cf2' },
    { name: "유은지", src: require('./assets/icons/유은지.webp'), link: 'https://www.notion.so/sue019522/1c7505eec7f180db9752cd73b96f404d' },
    { name: "유준선", src: require('./assets/icons/유준선.webp'), link: 'https://www.notion.so/sue019522/1c7505eec7f18049b6b7d8b0f5cda399' },
    { name: "윤선현", src: require('./assets/icons/윤선현.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f18098afaddabff846bbd4' },
    { name: "윤아연", src: require('./assets/icons/윤아연.webp'), link: 'https://www.notion.so/sue019522/1c7505eec7f180048785cf4367e9f139' },
    { name: "이광원", src: require('./assets/icons/이광원.webp'), link: 'https://www.notion.so/sue019522/1c7505eec7f180d0a792c3e681dc02b2' },
    { name: "정다훈", src: require('./assets/icons/정다훈.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f18034a3c8dd60f2fdbb93' },
    { name: "정승우", src: require('./assets/icons/정승우.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f18074b951fb4765dd5438' },
    { name: "제갈태웅", src: require('./assets/icons/제갈태웅.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f1805d8662d2112927ff39' },
    { name: "최호철", src: require('./assets/icons/최호철.jpg'), link: 'https://www.notion.so/sue019522/1c7505eec7f1809e9e52c0c9b4806bd4' },
    { name: "최효정", src: require('./assets/icons/최효정.jpg'), link: 'https://www.notion.so/sue019522/1c7505eec7f180f4a5bdc45bcf4a4242' },
    { name: "홍성재", src: require('./assets/icons/홍성재.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f180b4aaf1fb3ada741b7a' },
    { name: "홍준모", src: require('./assets/icons/홍준모.jpg'), link: 'https://www.notion.so/sue019522/1c7505eec7f18022913fc3bb135a4afd' },
    { name: "홍태극", src: require('./assets/icons/홍태극.png'), link: 'https://www.notion.so/sue019522/1c7505eec7f18001a617e20a52deb716' },
];

const Notion = () => {
    const ICON_COUNT = icons.length;
    const [currentIndex, setCurrentIndex] = useState(0);

    const angleStep = 40; 
    const radius = 400; 

    const rotateLeft = () => {
        setCurrentIndex(prev => (prev - 1 + ICON_COUNT) % ICON_COUNT);
    };

    const rotateRight = () => {
        setCurrentIndex(prev => (prev + 1) % ICON_COUNT);
    };

    return (
        <div>
            <h1>Notion</h1>

            <button className="fixedBtn leftBtn" onClick={rotateLeft}>〈</button>
            <button className="fixedBtn rightBtn" onClick={rotateRight}>〉</button>

            <div className="notionContainer">
                {icons.map((icon, i) => {
                    const offset = (i - currentIndex + ICON_COUNT) % ICON_COUNT;
                    const adjustedOffset = offset > ICON_COUNT / 2 ? offset - ICON_COUNT : offset;

                    if (Math.abs(adjustedOffset) > 2) return null;

                    const angle = adjustedOffset * angleStep;

                    return (
                        <a
                            key={icon.id}
                            href={icon.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="notion"
                                src={icon.src}
                                alt={`icon-${icon.id}`}
                                style={{
                                    transform: `rotateY(${angle}deg) rotateX(6deg) translateZ(${radius}px)`
                                }}
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Notion;
