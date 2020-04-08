import React from "react";
import { Box, Typography } from "@material-ui/core";

import Skills from "./skills";

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
      "Sequelize",
      "MVC",
    ],
  },
];

export default function About({ scrollTo }) {
  return (
    <Box
      ref={scrollTo}
      mb="15vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h4" color="primary">
        <Box mt="20vh" textAlign="center">
          Skills
        </Box>
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        mt="60px"
        width="80%"
      >
        {skills.map((skill) => {
          return <Skills name={skill.name} skillNames={skill.skills} />;
        })}
      </Box>
    </Box>
  );
}
