import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";

import { useHistory, useLocation } from "react-router-dom";

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

export default function Navbar() {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Box display="flex">
            <Typography onClick={() => history.push("/")}>Home</Typography>

            <Typography onClick={() => history.push("/blog")}>Blog</Typography>
          </Box>
          <Box display="flex">
            {location.pathname.split("/")[1] === "blog" ? (
              <Typography>Sign in</Typography>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
