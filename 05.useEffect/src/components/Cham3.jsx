import React, { useState } from 'react';
import useRandom from '../../../team_dice/4LeafClover/team_dice/dice-app-ksh/src/components2/useRandom';

export const Cham3 = () => {
    const [user, setUser] = useState(0);
    const [com, setCom] = useState(0);
    const [result, setResult] = useState("");
    const { getRandom } = useRandom({ min: 1, max: 3 });

    const handleClick = (userChoice) => {
        const comChoice = getRandom();
        setUser(userChoice);
        setCom(comChoice);

        if (userChoice === comChoice) {
            setResult("승리");
        } else {
            setResult("패배");
        }
    };

    return (
        <>
            <h1>참참참 게임</h1>
            <div>
                <p>나의 선택 : {user === 1 ? "좌" : user === 2 ? "정면" : user === 3 ? "우" : ""}</p>
                <p>컴퓨터의 선택 : {com === 1 ? "좌" : com === 2 ? "정면" : com === 3 ? "우" : ""}</p>
                {result === ''?(<p/>):<p>게임 결과 : {result}</p>}
            </div>
            <div>
                <button onClick={() => handleClick(1)}>좌</button>
                <button onClick={() => handleClick(2)}>정면</button>
                <button onClick={() => handleClick(3)}>우</button>
            </div>
        </>
    );
};

export default Cham3;
