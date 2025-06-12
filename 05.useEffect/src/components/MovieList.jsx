import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
    const targetDt = '20250611';
    const movieAPI = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${targetDt}`;

    const getMovieData = async () => {
        try {
            const res = await axios.get(movieAPI);
            const data = res.data;
            setMovies(data.boxOfficeResult.dailyBoxOfficeList);
        } catch (error) {
            console.error('영화 데이터 불러오기 오류:', error);
        }
    };

    useEffect(() => {
        getMovieData();
    }, []);

    return (
        <>
        <div style={{ textAlign: 'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
            <h1 >영화 순위</h1>
            <table border="1" style={{ width: '50%', borderCollapse: 'collapse', textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>영화제목</th>
                        <th>개봉일</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (
                        <tr key={index}>
                            <td>{movie.rank}</td>
                            <td>{movie.movieNm}</td>
                            <td>{movie.openDt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default MovieList;
