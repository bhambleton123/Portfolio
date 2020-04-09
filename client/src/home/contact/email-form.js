import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  Box,
  TextareaAutosize,
} from "@material-ui/core";

export default function EmailForm() {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input type="email"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Company (optional)</InputLabel>
        <Input type="email"></Input>
      </FormControl>
      <FormControl margin="dense">
        <TextareaAutosize
          rows={5}
          placeholder="Your message"
        ></TextareaAutosize>
      </FormControl>
      <Button>Send</Button>
    </Box>
  );
}
