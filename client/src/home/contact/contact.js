import React from "react";
import { Typography, Box } from "@material-ui/core";
import EmailForm from "./email-form";
import OtherOptions from "./other-options";
import DownloadResume from "./donwload-resume";

export default function Contact() {
  return (
    <>
      <Box>
        <Typography variant="h4" color="primary">
          <Box textAlign="center" mt="50px">
            Contact me!
          </Box>
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <EmailForm />
      </Box>
      <OtherOptions />
      <DownloadResume />
    </>
  );
}
