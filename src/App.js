import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "@/components/MovieList/MovieList";
import MovieDetails from "@/components/MovieDetails/MovieDetails";

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    if (favorites.some((fav) => fav.episode_id === movie.episode_id)) {
      setFavorites(
        favorites.filter((fav) => fav.episode_id !== movie.episode_id)
      );
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
    setImageUrl(`../../images/sw0${movie.episode_id}.jpg`);
  }

  return (
    <div className="App">
      <div
        className="bg-pic"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <MovieDetails
        movie={selectedMovie}
        //error missing onFavoriteToggle prop with handleFavorite that was defined but was never read/used
        onFavoriteToggle={handleFavorite}
        favorites={favorites}
      />
      <MovieList onMovieSelect={handleMovieSelect} />
    </div>
  );
}

export default App;
