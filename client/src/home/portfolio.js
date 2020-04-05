import React from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  portfolio: {
    marginTop: "30vh",
  },
});

export default function Portfolio() {
  const classes = useStyles();
  return (
    <Box
      className={classes.portfolio}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="50vh"
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" color="primary">
          Hi, I'm Brian Hambleton
        </Typography>
        <Typography variant="h4" color="primary">
          Competent web developer, fast learner, and just an all around good
          dude
        </Typography>
      </Box>
      <Button variant="outlined" color="primary">
        Learn More
      </Button>
    </Box>
  );
}
