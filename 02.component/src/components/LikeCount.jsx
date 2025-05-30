import React from 'react'
import { useState } from 'react'
export const LikeCount = () => {

    const [like, setLike] = useState(0);
    const [emoji, setEmoji] = useState("♡");


    const handleLike = () => {
        
        if (like % 2 === 0) {
            setEmoji("❤️");
            setLike(like + 1);
        } else {
            setEmoji("♡");
            setLike(like - 1);
        }
    }
    return (
        <div>
            <img style={{ width: 250, height: 200 }}
                src="src/assets/img/jerryThx.gif" />
            <h1>좋아요 {like}개</h1>
            <span
                onClick={handleLike}>{emoji} 좋아요</span>

        </div>
    )
}

export default LikeCount