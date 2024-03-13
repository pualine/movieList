import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../../movieCard/MovieCard';



const Popular = () => {
    const BASE_URL = "https://api.themoviedb.org/3";
    const [popular, setPopular] = useState([]);

    const fetchPopular = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/movie/popular?language=en-US&page=2`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY
                }
            });
            setPopular(response.data.results);
        } catch (error) {
            console.log('Error getting popular movies', error)
        }
    }
    useEffect(() => {
        fetchPopular()
    }, []);

    return (
        <>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 ml-5 text-gray-500">Popular</h2>
                <div className="flex overflow-x-auto space-x-4">
                    {/* Map through the movies array to display each movie card */}
                    {popular.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Popular;