import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    minWidth: "23vw",
    maxWidth: "23vw",
  },
  image: {
    height: "20vh",
  },
});

export default function ProjectCard({ image, title, description }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.image} image={image} title="mandelbrot" />
        <CardContent>
          <Typography component="div">
            <Box textAlign="center" fontWeight="fontWeightBold">
              {title}
            </Box>
            <Box textAlign="center">{description}</Box>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
