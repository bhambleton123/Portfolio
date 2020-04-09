import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";

export default function OtherOptions() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt="30px"
    >
      <Typography variant="h5" color="primary">
        <Box textAlign="center" mt="25px">
          Other options:
        </Box>
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        width="200px"
        mt="30px"
      >
        <Link href="https://github.com/bhambleton123">
          <GitHubIcon color="primary" />
        </Link>
        <Link href="https://www.linkedin.com/in/brian-hambleton/">
          <LinkedInIcon color="primary" />
        </Link>
        <Link href="https://www.facebook.com/bhambl3ton">
          <FacebookIcon color="primary" />
        </Link>
        <Link href="mailto:bhambl3t0n1@gmail.com">
          <EmailIcon color="primary" />
        </Link>
      </Box>
    </Box>
  );
}
