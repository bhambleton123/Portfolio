import React from "react";
import { Box, Typography, Grid, makeStyles } from "@material-ui/core";

import SkillsSection from "./skills-section";

const skills = [
  {
    name: "front-end",
    skills: [
      "HTML5",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Redux",
      "Global State Management",
    ],
  },
  {
    name: "back-end",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API's",
      "PostgreSQL",
      "MySQL",
      "Sequelize",
      "MVC",
    ],
  },
  {
    name: "other",
    skills: [
      "Docker",
      "AWS",
      "Microservices",
      "Monolith",
      "Version Control",
      "Github",
      "Agile",
    ],
  },
];

const useStyles = makeStyles({
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function Skills({ scrollTo }) {
  const classes = useStyles();
  return (
    <Box
      ref={scrollTo}
      mb="15vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h4" color="primary">
        <Box mt="20vh" mb="35px" textAlign="center" fontSize="40px">
          Skills
        </Box>
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        {skills.map((skill) => {
          return (
            <Box
              width="500px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid className={classes.gridItem} item>
                <SkillsSection name={skill.name} skillNames={skill.skills} />
              </Grid>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}
