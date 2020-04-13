import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { userContext } from "./context/user-context";
import axios from "axios";

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

export default function Navbar({ setUser }) {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const signOut = () => {
    axios
      .get("/api/logout")
      .then((res) => {
        setUser(false);
        setOpenMenu(false);
        history.push("/blog");
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  const openMenuActions = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const signedInOrOut = (user) => {
    if (user) {
      console.log(openMenu);
      return (
        <>
          <Typography onClick={openMenuActions}>{user.username}</Typography>
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={() => setOpenMenu(false)}
          >
            <MenuItem onClick={signOut}>Logout</MenuItem>
          </Menu>
        </>
      );
    } else {
      return (
        <Typography onClick={() => history.push("/sign-in")}>
          Sign in
        </Typography>
      );
    }
  };

  return (
    <userContext.Consumer>
      {(value) => (
        <AppBar className={classes.appBar} position="sticky">
          <Toolbar>
            <Box width="100%" display="flex" justifyContent="space-between">
              <Box display="flex">
                <Typography onClick={() => history.push("/")}>Home</Typography>

                <Typography onClick={() => history.push("/blog")}>
                  Blog
                </Typography>
              </Box>
              <Box display="flex">
                {location.pathname.split("/")[1] === "blog"
                  ? signedInOrOut(value.User)
                  : ""}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </userContext.Consumer>
  );
}
