import React from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import ProjectCard from "./project-card";
import Mandelbrot from "../../assets/mandelbrot.gif";
import Sorting from "../../assets/sorting-algorithms.gif";
import BookClub from "../../assets/book_club.gif";

const projects = [
  {
    image: Sorting,
    title: "Sorting Algorithm Visualizer",
    description: "Application for viewing sorting algorithms with rectangles",
    longerDescription: `I build a sorting algorithm visualizer with React using rectangles that swap and turn red when swapped. 
    This project helped me gain a deeper understanding of a couple different basic soriting algorithms and how to display them happening asynchronously in a 
    visual manner`,
  },
  {
    image: Mandelbrot,
    title: "Mandelbrot Zoom",
    description:
      "Application for zooming into a selected portion of the Mandelbrot Set",
    longerDescription: `I had a lot of fun with this project and will probably write a post about it soon to go into a little bit more depth, but
    what it does is renders the mandelbrot set on a [-2, 2] range and [-2,2] domain. The application then allows you to select a portion of the mandelbrot set, drag the mouse
    and release it to generate two coordinates that specify a rectangular region to zoom into the Mandelbrot Set.`,
  },
  {
    image: BookClub,
    title: "Book Club",
    description: "CRUD application for creating notes on your favorite books",
    longerDescription: `This was a project I made a while back (not the most visually outstanding I admit) that gave me a bit more experience doing basic CRUD
    and hooking up to an api (Google Books API). I've since grown in my skills but I was proud of this project when I finished it.`,
  },
];

const useStlyes = makeStyles({
  gridItem: {
    marginLeft: "16px",
  },
  gridContents: {
    width: "98%",
    marginLeft: "10px",
  },
});

export default function Projects() {
  const classes = useStlyes();
  return (
    <>
      <Typography variant="h4" color="primary">
        <Box textAlign="center" mb="20px" ml="30px" fontSize="40px">
          Applications
        </Box>
      </Typography>
      <Grid
        className={classes.gridContents}
        container
        spacing={4}
        justify="center"
      >
        {projects.map((project) => (
          <Grid key="title" className={classes.gridItem} item>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              longerDescription={project.longerDescription}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
