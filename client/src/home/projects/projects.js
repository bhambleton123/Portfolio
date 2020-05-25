import React from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import ProjectCard from "./project-card";
import Mandelbrot from "../../assets/mandelbrot.gif";
import Sorting from "../../assets/sorting-algorithms.gif";
import BookClub from "../../assets/book_club.gif";
import Blog from "../../assets/blog.gif";
import JobAssist from "../../assets/job-board.gif";

const projects = [
  {
    image: JobAssist,
    title: "Job Assist (In development)",
    description: "Application for tracking jobs via a kanban board",
    longerDescription: `Going through the job search has been a bit messy, having to use different spreadsheets to track jobs that I've applied to,
    writing cover letters, customizing resumes. I wanted to create an application to have an all-in-one place to store resources for particular jobs.
    I'm using Google oauth for authenticating users, MondoDB to offer an easier way to arrange jobs in lists, react-beautiful-dnd for adding 
    a smooth drag and drop user experience for the board, and much more. Should be deployed within the next couple weeks! (As of 05/25/2020)`,
  },
  {
    image: Blog,
    title: "Portfolio Blog",
    description: "Application for creating blog posts, and more...",
    longerDescription: `I built this portfolio along with the blog with the help of a UI library called Material-UI, React Hooks, React context API for 
    storing information on the user logged in, Draft.js to create the text editor for creating posts, PostgreSQL for storing data, Node and Express for most of the back
    end, Redis for user sessions, etc. It was super fun, and one of my more fleshed out projects that I spent time making responsive with CSS. I'll also be 
    going into more depth on this in a blog post later to come.`,
  },
  {
    image: Sorting,
    title: "Sorting Algorithm Visualizer",
    description: "Application for viewing sorting algorithms with rectangles",
    longerDescription: `I built a sorting algorithm visualizer with React using rectangles that swap and turn red when swapped. 
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

const useStyles = makeStyles({
  gridSpacing: {
    width: "100%",
    margin: 0,
  },
});

export default function Projects() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" color="primary">
        <Box textAlign="center" mb="20px" fontSize="40px">
          Applications
        </Box>
      </Typography>
      <Box>
        <Grid
          className={classes.gridSpacing}
          container
          spacing={5}
          justify="center"
        >
          {projects.map((project, index) => (
            <Grid key={index} item>
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                longerDescription={project.longerDescription}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
