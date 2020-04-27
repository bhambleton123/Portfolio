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
      "React Hooks",
      "Redux",
      "Material-UI",
      "Bootstrap",
    ],
  },
  {
    name: "back-end",
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "RESTful API's",
      "OAuth",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Mongoose",
      "Sequelize",
      "MVC",
    ],
  },
  {
    name: "other",
    skills: [
      "AWS",
      "Monolithic Architecture",
      "Version Control",
      "Git",
      "Agile",
      "Gitflow",
    ],
  },
  {
    name: "learning",
    skills: ["Docker", "Microservices", "Python (Flask)", "Ruby on Rails"],
  },
];

const useStyles = makeStyles({
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  gridSpacing: {
    width: "100%",
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
        <Box mt="8vh" mb="35px" textAlign="center" fontSize="40px">
          Skills
        </Box>
      </Typography>
      <Grid
        container
        className={classes.gridSpacing}
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        {skills.map((skill, index) => {
          return (
            <Box
              key={index}
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
