import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";

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
});

export default function Navbar({ blogRendered }) {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Box display="flex">
            <Typography>Home</Typography>
            <Typography>Blog</Typography>
          </Box>
          <Box display="flex">
            {blogRendered ? <Typography>Sign in</Typography> : ""}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
