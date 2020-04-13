import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export default function Footer() {
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
  return (
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
  );
}
