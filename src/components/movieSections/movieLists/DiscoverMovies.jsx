import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../movieCard/MovieCard";



const DiscoverMovies = () => {
    // Define the API URL
    const BASE_URL = "https://api.themoviedb.org/3";
    // State to store the fetched movies
    const [movies, setMovies] = useState([]);

    // Function to fetch movies from the API
    const fetchMovies = async () => {
        try {
            // Send GET request to the API
            const response = await axios.get(`${BASE_URL}/discover/movie?language=en-US&page=4`, {
                params: {
                    api_key: process.env.REACT_APP_MOVIE_API_KEY
                }
            });
            // Set the fetched movies in state
            setMovies(response.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    // Fetch movies when the component mounts
    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
            < h2 className="text-dark text-lg mb-4 mr-4">Discover Movies</h2>
            {/* Container for trending movies with horizontal scroll */}
            <div className="flex overflow-x-auto space-x-4" style={{ direction: 'rtl' }}>
                {/* Map through the movies array to display each movie card */}
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    );
};

export default DiscoverMovies;

