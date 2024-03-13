import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from '../../movieCard/MovieCard'

const Upcoming = () => {
    const BASE_URL = "https://api.themoviedb.org/3"
    const [upcoming, setUpcoming] = useState([])


    const fetchUpcoming = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/movie/upcoming?language=en-US&page=6`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY
                }
            });
            setUpcoming(response.data.results)
        } catch (error) {
            console.log('Error getting upcoming movies', error)
        }

    }

    useEffect(() => {
        fetchUpcoming()
    }, []);
    return (
        <>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 ml-5 text-gray-500 mr-4">Upcoming</h2>
                <div className="flex overflow-x-auto space-x-4">
                    {/* Map through the movies array to display each movie card */}
                    {upcoming.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Upcoming