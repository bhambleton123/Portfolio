import React, { useState } from "react";
import {
  FormControl,
  Button,
  Box,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import axios from "axios";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sendSentAlert, setSendSentAlert] = useState(false);
  const [sendSendingAlert, setSendSendingAlert] = useState(false);
  const [sendErrorAlert, setSendErrorAlert] = useState(false);

  const preventSubmitOnEnter = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  const submitEmail = (e) => {
    e.preventDefault();

    setSendSendingAlert(true);
    axios
      .post("/api/mail", {
        name,
        email,
        company,
        message,
      })
      .then((res) => {
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setSendSendingAlert(false);
        setSendSentAlert(true);
        setTimeout(() => {
          setSendSendingAlert(false);
        }, 5000);
      })
      .catch((err) => {
        setSendErrorAlert(true);
        setTimeout(() => {
          setSendErrorAlert(false);
        }, 5000);
        console.error(err);
      });
  };

  return (
    <form onSubmit={submitEmail} onKeyDown={preventSubmitOnEnter}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        maxWidth="250px"
        minWidth="200px"
      >
        {sendSentAlert ? (
          <Alert severity="success">
            <AlertTitle>Success!</AlertTitle>
            Your email was successfully sent! I'll get back to you soon at the
            email provided.
          </Alert>
        ) : (
          ""
        )}
        {sendSendingAlert ? (
          <Alert severity="info">
            <AlertTitle>Sending email...</AlertTitle>
            Currently working on sending your email to Brian.
          </Alert>
        ) : (
          ""
        )}
        {sendErrorAlert ? (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Email was not successfully sent.
          </Alert>
        ) : (
          ""
        )}
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
