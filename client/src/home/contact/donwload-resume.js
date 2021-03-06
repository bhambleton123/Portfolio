import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Typography, Box, Link } from "@material-ui/core";

export default function DownloadResume() {
  return (
    <Box
      mt="20px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt="20px"
      pb="200px"
    >
      <Typography color="primary" variant="h6">
        <Box mb="10px">Download my resume!</Box>
      </Typography>
      <Link href="https://portfoliobrianhambleton.s3-us-west-1.amazonaws.com/Portfolio_assets/Brian_Hambleton_Resume.pdf">
        <GetAppIcon color="primary" />
      </Link>
    </Box>
  );
}
