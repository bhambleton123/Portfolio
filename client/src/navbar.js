import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#e8f1ff",
    "& p": {
      marginRight: "50px",
      cursor: "pointer",
      fontWeight: 100,
      "&:hover": {
        fontWeight: 600,
      },
    },
  },
  links: {
    textDecoration: "none",
  },
});

export default function Navbar({ blogRendered }) {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Box display="flex">
            <Link className={classes.links} to="/">
              <Typography>Home</Typography>
            </Link>
            <Link className={classes.links} to="/blog">
              <Typography>Blog</Typography>
            </Link>
          </Box>
          <Box display="flex">
            {blogRendered ? <Typography>Sign in</Typography> : ""}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
