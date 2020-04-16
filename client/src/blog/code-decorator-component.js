import React from "react";
import { Typography, Box } from "@material-ui/core";

export default function CodeDecoratorComponent(props) {
  return (
    <Typography variant="h1" color="secondary">
      <Box {...props}>{props.children}</Box>
    </Typography>
  );
}
