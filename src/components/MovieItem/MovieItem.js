import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function MovieItem({ movie, onMovieSelect }) {
  const imageUrl = `../../images/sw0${movie.episode_id}.jpg`;
  return (
    <Card
      variant="outlined"
      sx={{
        m: "4px",
        color: "white",
        height: "100px",
        width: "150px",
        borderRadius: "5px",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        position: "relative",
      }}
      key={movie.episode_id}
      onClick={() => onMovieSelect(movie)}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "bold",
            position: "absolute",
            bottom: "1px",
          }}
          variant="text"
        >
          {movie.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieItem;
