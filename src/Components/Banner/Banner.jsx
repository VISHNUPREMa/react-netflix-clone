import React, { useState, useEffect } from 'react';
import './Banner.css';
import { API_KEY, imageUrl } from '../../Constants/Constants';
import axios from '../../axios';

function Banner() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                setInterval(() => {
                    const results = response.data.results;
                const randomIndex = Math.floor(Math.random() * results.length);
                setMovie(results[randomIndex]);
                    
                }, 3500);
                
                
            })
            .catch(error => {
                console.error('Error fetching the trending movies:', error);
            });
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`
            }}
            className='banner'
        >
            <div className='content'>
                <h1 className='title'>{movie ? movie.title || movie.name : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>
    {movie ? (movie.overview.length > 220 ? `${movie.overview.substring(0, 220)}...` : movie.overview) : ""}
</h1>

            </div>
            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
