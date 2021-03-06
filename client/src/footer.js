import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const useStyles = makeStyles({
    footer: {
      position: "absolute",
      height: "80px",
      marginTop: "calc(5% + 60px)",
      left: 0,
      bottom: 0,
      width: "100%",
      backgroundColor: grey[200],
      textAlign: "center",
    },
  });
  const classes = useStyles();
  return location.pathname !== "/sign-in" &&
    location.pathname !== "/register" ? (
    <Box component="footer" className={classes.footer}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        Brian Hambleton © 2020
      </Box>
    </Box>
  ) : (
    ""
  );
}
