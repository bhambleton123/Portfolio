import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ProjectCardModal from "./project-card-modal";
import { useEffect } from "react";

const useStyles = makeStyles({
  card: {
    minWidth: "200px",
    maxWidth: "400px",
  },
  image: {
    height: "20vh",
  },
});

export default function ProjectCard({
  image,
  title,
  description,
  longerDescription,
}) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    openModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [openModal]);
  return (
    <>
      {openModal ? (
        <ProjectCardModal
          image={image}
          title={title}
          description={description}
          longerDescription={longerDescription}
          handleClose={() => setOpenModal(false)}
        />
      ) : (
        ""
      )}
      <Card onClick={() => setOpenModal(true)} className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.image} image={image} title={title} />
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
    </>
  );
}
