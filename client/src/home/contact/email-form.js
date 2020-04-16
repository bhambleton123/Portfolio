import React, { useState } from "react";
import {
  FormControl,
  Button,
  Box,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const preventSubmitOnEnter = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  const submitEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
  };

  return (
    <form onSubmit={submitEmail} onKeyDown={preventSubmitOnEnter}>
      <Box display="flex" justifyContent="center" flexDirection="column">
        <FormControl>
          <TextField
            required
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Company (optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </FormControl>
        <FormControl margin="dense">
          <TextareaAutosize
            required
            rows={5}
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></TextareaAutosize>
        </FormControl>
        <Button type="submit">Send</Button>
      </Box>
    </form>
  );
}
