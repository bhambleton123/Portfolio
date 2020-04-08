import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import ProjectCard from "./project-card";
import Mandelbrot from "../../assets/mandelbrot.gif";
import Sorting from "../../assets/sorting-algorithms.gif";
import BookClub from "../../assets/book_club.gif";

const projects = [
  {
    image: Sorting,
    title: "Sorting Algorithm Visualizer",
    description: "Application for viewing sorting algorithms with rectangles",
  },
  {
    image: Mandelbrot,
    title: "Mandelbrot Zoom",
    description:
      "Application for zooming into a selected portion of the Mandelbrot Set",
  },
  {
    image: BookClub,
    title: "Book Club",
    description: "CRUD application for creating notes on your favorite books",
  },
];

export default function Projects() {
  return (
    <>
      <Typography variant="h4" color="primary">
        <Box textAlign="center" mb="20px" ml="30px" fontSize="3vw">
          Some projects
        </Box>
      </Typography>
      <Grid container spacing={4} justify="center">
        {projects.map((project) => (
          <Grid item>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
