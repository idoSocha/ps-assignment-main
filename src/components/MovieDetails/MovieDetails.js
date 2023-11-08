import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia, Button } from "@mui/material";

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
  if (!movie) return null;

  // Checking if it is an array - by doing that it made sure that even the cases it was empty the component will still be rendered in the parent component (App.js)
  const isFavorite =
    Array.isArray(favorites) &&
    favorites.some((fav) => fav.episode_id === movie.episode_id);
  const imageUrl = `../../images/sw0${movie.episode_id}.jpg`;
  return (
    <div>
      <Card
        sx={{
          my: 2,
          width: "80%",
          height: "350px",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "5px",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
        key={movie.episode_id}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography
            color="#03a9f4"
            sx={{
              position: "absolute",
              bottom: 1,
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.9)",
            }}
            variant="h4"
          >
            {movie.title}
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: "4px" }}
        onClick={() => onFavoriteToggle(movie)}
      >
        {isFavorite ? "Dislike" : "Like"}
      </Button>
      <Typography color="white" variant="h5">
        Episode: {movie.episode_id}
      </Typography>
    </div>
  );
}

export default MovieDetails;
