import React, { useRef } from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import Projects from "./projects";
import About from "./about";

const useStyles = makeStyles({
  portfolio: {
    marginTop: "30vh",
  },
});

export default function Portfolio() {
  const classes = useStyles();
  const projectsRef = useRef(null);

  const scrollTo = (refType) => {
    refType.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box
        className={classes.portfolio}
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="50vh"
        mr="10px"
        ml="20px"
        mb="20vh"
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
        <Button
          variant="outlined"
          color="primary"
          onClick={() => scrollTo(projectsRef)}
        >
          Learn More
        </Button>
      </Box>
      <About scrollTo={projectsRef} />
      <Box width="98%">
        <Typography variant="h4" color="primary">
          <Box textAlign="center" mb="20px" ml="30px">
            Some projects
          </Box>
        </Typography>
        <Projects />
      </Box>
    </>
  );
}
