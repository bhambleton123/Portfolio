import React from "react";
import { Box, Typography } from "@material-ui/core";

export default function NotFound() {
  return (
    <Box mt="30px">
      <Typography variant="h3" color="primary">
        <Box textAlign="center">404! Something must have gone wrong</Box>
      </Typography>
    </Box>
  );
}
