import React, { useEffect, useState } from 'react'
import axios from "axios";
import MovieCard from '../../movieCard/MovieCard';


const NowPlaying = () => {

    const BASE_URL = "https://api.themoviedb.org/3"
    const [NowPlaying, setNowPlaying] = useState([]);

    const fetchNowPlaying = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/movie/now_playing?language=en-US&page=5`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY
                }
            });
            setNowPlaying(response.data.results);
        } catch (error) {
            console.log("Error displaying movies now playing", error)
        }

    }

    useEffect(() => {
        fetchNowPlaying()
    }, [])
    return (
        <>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 ml-5 text-gray-500">Now Playing</h2>
                <div className="flex overflow-x-auto space-x-4 " style={{ direction: 'rtl' }}>
                    {/* Map through the movies array to display each movie card */}
                    {NowPlaying.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default NowPlaying;