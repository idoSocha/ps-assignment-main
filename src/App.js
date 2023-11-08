import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "@/components/MovieList/MovieList";
import MovieDetails from "@/components/MovieDetails/MovieDetails";
import Box from "@mui/material/Box";

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
  }
  // const imageUrl = `../../images/sw0${selectedMovie.episode_id || 1}.jpg`;
  const imageUrl = "../../images/sw02.jpg";

  return (
    <div className="App">
      <Box
        sx={{
          width: "80%",
          margin: "auto auto",
          backgroundImage: `url(${imageUrl})`,
          backdropFilter: "blur(12px)",
          backgroundSize: "150% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <div></div>
        <MovieDetails
          movie={selectedMovie}
          //error missing onFavoriteToggle prop with handleFavorite that was defined but was never read/used
          onFavoriteToggle={handleFavorite}
          favorites={favorites}
        />
        <MovieList onMovieSelect={handleMovieSelect} />
      </Box>
    </div>
  );
}

export default App;
