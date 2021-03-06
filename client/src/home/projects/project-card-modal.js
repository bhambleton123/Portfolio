import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  makeStyles,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

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
      height: "36.5vw",
    },
  });

  const classes = useStyles();
  return (
    <Box className={classes.modal}>
      <Card className={classes.content}>
        <CardContent>
          <Typography variant="h4">
            <Box textAlign="center" fontWeight={300}>
              {title}
            </Box>
          </Typography>
        </CardContent>
        <Box width="100%" display="flex" justifyContent="center">
          <CardMedia image={image} title={title} className={classes.media} />
        </Box>
        <CardContent>
          <Typography color="secondary">
            <Box textAlign="center">{description}</Box>
          </Typography>
          <Typography>
            <Box mt="20px" textAlign="justify">
              {longerDescription}
            </Box>
          </Typography>
        </CardContent>
        <Box display="flex" justifyContent="center" mb="20px">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
}
