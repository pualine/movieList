import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../../movieCard/MovieCard'

const TopRated = () => {
    const BASE_URL = "https://api.themoviedb.org/3"
    const [topRated, setTopRated] = useState([]);

    const fetchTopRated = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY

                }
            });
            setTopRated(response.data.results);
        } catch (error) {
            console.log('Error getting top rated movies', error)
        }
    }
    useEffect(() => {
        fetchTopRated()
    }, []);

    return (
        <>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Top Rated</h2>
                <div className="flex overflow-x-auto space-x-4 ml-5 text-gray-500 whitespace-nowrap" style={{ direction:'rtl'}}>
                    {/* Map through the movies array to display each movie card */}
                    {topRated.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default TopRated;