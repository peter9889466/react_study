import React from 'react';
import './App4Orbit.css';

const notionData = [
    0, 20, 40, 60, 80, 100, 120, 140, 160, 180,
    200, 220, 240, 260, 280, 300, 320, 340
];

function App4() {
    return (
        <div className="notions">
            {notionData.map((angle, index) => {
                if (index % 2 === 0) {
                    return <img
                        key={index}
                        className="notion"
                        style={{ '--i': angle }}
                        src="https://i.namu.wiki/i/EY559r31H-um8uTtptPIbCZoBGxsumSlwEH0T_rA6WmxQq1UwqyAf3cJQJXN7Fv5CoEz0kv5CBXzjkkPU_XWig.svg"
                        alt="notion"
                    />
                }
                return <img
                    key={index}
                    className="notion"
                    style={{ '--i': angle }}
                    src="https://cdn.simpleicons.org/javascript"
                    alt="notion"
                />
            })}
        </div>
    );
}


export default App4Orbit;