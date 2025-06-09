import React, { useRef, useState } from 'react';

const ImgChangeExam = () => {
    const imgInputRef = useRef();
    const imgRef = useRef();
    const [rotateDeg, setRotateDeg] = useState(0); // 회전 각도 상태

    const imgCat = "https://cdn.eyesmag.com/content/uploads/posts/2025/01/22/shutterstock_2491179401-06f50759-c2c5-49cb-b10b-ba47ca6d2166.jpg";
    const imgDog = "https://upload.wikimedia.org/wikipedia/commons/2/22/Pride_of_Pets_Dog_Show%2C_2011_%286271388774%29.jpg";
    const imgDogSq = "https://i.namu.wiki/i/DjD84UNncvGAr6kEXRuuEIF8te7jCul0Ke6pkCGV9toECApjkAVmTSexJdWf8mA8aI5DvpOy4-EVjOaAg75Vqg.webp";
    const imgAnimal = "https://img.29cm.co.kr/next-edition/2019/02/18/3fb64db80dc340d591ac6e3f33b13055_20190218153526.jpg";
    const imgDefault = "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMDlfMjg4/MDAxNjAyMjQ5MzgzNzcw.LLnT13iiHp0O-SXfqilXqd1Nok38ETF_Fljm10Bo3AMg.cwuTytZq0am-Ffgoc39zgGSbnA8ywNeaPYSqfzDvOOEg.JPEG.bbano2007/KakaoTalk_Photo_2020-10-07-12-50-36.jpeg?type=w800";

    const handleSubmit = (e) => {
        e.preventDefault();
        const keyword = imgInputRef.current.value.trim();

        let imageToShow = imgAnimal;

        if (keyword === "고양이") {
            imageToShow = imgCat;
        } else if (keyword === "강아지") {
            imageToShow = imgDog;
        } else if (keyword === "멈뭄미") {
            imageToShow = imgDogSq;
        } 

        imgRef.current.src = imageToShow;

        // 회전 각도 누적
        setRotateDeg((prev) => prev + 360);
    };

    return (
        <div
            className="AnimalImg"
            style={{ transform: `rotateY(${rotateDeg}deg)` }}
        >
            <h1>희망하는 사진이 있나요?</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={imgInputRef} placeholder="고양이 또는 강아지 입력" />
                <input type="submit" value="변경!" />
                <br />
                <img
                    ref={imgRef}
                    src={imgDefault}
                    style={{ width: '300px', height: '300px', marginTop: '20px' }}
                />
            </form>
        </div>
    );
};

export default ImgChangeExam;
