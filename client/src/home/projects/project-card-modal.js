import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  makeStyles,
  CardMedia,
} from "@material-ui/core";

export default function ProjectCardModal({
  image,
  title,
  description,
  longerDescription,
  handleClose,
}) {
  const useStyles = makeStyles({
    modal: {
      display: "block",
      position: "fixed",
      zIndex: 1,
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      overflow: "auto",
      backgroundColor: "rgb(0,0,0)",
      backgroundColor: "rgb(0,0,0,0.4)",
    },
    content: {
      zIndex: 2,
      margin: "10vh auto",
      width: "75%",
    },
    media: {
      width: "100%",
      height: "35vw",
    },
  });

  console.log(image);
  const classes = useStyles();
  return (
    <Box onClick={handleClose} className={classes.modal}>
      <Card className={classes.content}>
        <Box width="100%" display="flex" justifyContent="center">
          <CardMedia image={image} title={title} className={classes.media} />
        </Box>
        <CardContent>
          <Typography>
            <Box textAlign="center">{description}</Box>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
