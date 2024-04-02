import React, { useState, useEffect } from "react";
import { Home } from "./pages/home";

export const Movies = () => {
  const API_KEY = "227355c25b5984172934aa93f25e5d05"; // Replace with your actual API key
  const Url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(Url);
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        console.log("Fetched movies:", data.results); // Log the fetched data
        setMoviesList(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [Url]);

  return (
    <>
      <Home Movies={moviesList} />
    </>
  );
};