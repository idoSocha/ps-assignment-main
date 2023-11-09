import React, { useState, useEffect } from "react";
import { fetchMovies } from "@/services/api";
import MovieItem from "@/components/MovieItem/MovieItem";
import Loading from "@/components/Loading/Loading";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function MovieList({ onMovieSelect }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading message="Loading Movies..." />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "80vw",
            margin: "auto auto",
          }}
        >
          {movies.map((movie) => (
            <Grid item xs={2} key={movie.episode_id}>
              <MovieItem movie={movie} onMovieSelect={onMovieSelect} />
            </Grid>
          ))}
        </div>
      )}
    </Container>
  );
}

export default MovieList;
