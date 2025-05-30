import React from 'react'
import { useState } from 'react'

export const LikeCount2 = () => {

    const [like, setLike] = useState(0);
    const [emoji, setEmoji] = useState("♡");


    const handleLike = () => {
        if (true) {
            setEmoji("👍");
            setLike(like + 1);
            console.log(like);
        } 
    }

    const handleDislike = () => {
        
        if (like>0) {
            setEmoji("👎");
            setLike(like - 1);
            console.log(like);
        }
    }

    return (
        <div className='likeCount2'>
            <img style={{ width: 250, height: 200 }}
                src="src/assets/img/jerryThx.gif" />
            <h1>좋아요 {like}개</h1>
            <span onClick={handleLike}>👍 좋아요</span>
            <span onClick={handleDislike}>👎 싫어요</span>

        </div>
    )
}

export default LikeCount2