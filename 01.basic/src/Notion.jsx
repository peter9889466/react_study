import React, { useState } from 'react';
import './Notion.css';

const NotionData = Array.from({ length: 24 }, (_, i) => i); // 0 ~ 23

const Notion = () => {
    const [rotation, setRotation] = useState(0);

    const rotateLeft = () => setRotation(prev => prev - 15);
    const rotateRight = () => setRotation(prev => prev + 15);

    return (
        <div>
            <h1>Notion</h1>

            {/* 고정된 위치에 있는 버튼 */}
            <button className="fixedBtn leftBtn" onClick={rotateLeft}>〈</button>
            <button className="fixedBtn rightBtn" onClick={rotateRight}>〉</button>

            <div className="carouselWrapper">
                <div
                    className="notionContainer"
                    style={{ transform: `rotateY(${rotation}deg)` }}
                >
                    {NotionData.map((_, index) => (
                        <img
                            key={index}
                            className="notion"
                            style={{ '--i': index }}
                            src="https://cdn.simpleicons.org/javascript"
                            alt={`notion-${index}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notion;
