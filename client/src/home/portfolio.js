import React, { useRef } from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
import Contact from "./contact/contact";

const useStyles = makeStyles({
  portfolio: {
    marginTop: "30vh",
  },
  name: {
    fontSize: "calc(20px + 2vw)",
  },
  description: {
    fontSize: "calc(9px + 1vw)",
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
            <Box className={classes.name}>Hi, I'm Brian Hambleton</Box>
          </Typography>
          <Typography variant="h4" color="primary">
            <Box className={classes.description}>
              Web developer with a passion for learning new technologies
            </Box>
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
      <Skills scrollTo={projectsRef} />
      <Box>
        <Projects />
      </Box>
      <Contact />
    </>
  );
}
