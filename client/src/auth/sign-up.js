import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  makeStyles,
  Link,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  button: {
    marginTop: "20px",
  },
});

export default function SignUp() {
  let history = useHistory();
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorText, setFirstNameErrorText] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameErrorText, setLastNameErrorText] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorText, setUsernameErrorText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [sendingAlert, setSendingAlert] = useState(false);
  const [sentAlert, setSentAlert] = useState(false);

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => {
        if (res.data.User.username) {
          history.push("/blog");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const __removeErrors = () => {
    setUsernameError(false);
    setUsernameErrorText("");
    setPasswordError(false);
    setPasswordErrorText("");
    setFirstNameError(false);
    setFirstNameErrorText("");
    setLastNameError(false);
    setLastNameErrorText("");
  };

  const __clearInfo = () => {
    setFirstName("");
    setLastName("");
    setUsername("");
    setPassword("");
    setPasswordConfirm("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    __removeErrors();

    // Handle form validation
    if (firstName.length === 0) {
      setFirstNameError(true);
      setFirstNameErrorText("First name must not be blank");
    }

    if (lastName.length === 0) {
      setFirstNameError(true);
      setFirstNameErrorText("Last name must not be blank");
    }

    if (/[^A-Za-z]/.test(firstName)) {
      setFirstNameError(true);
      setFirstNameErrorText(
        "First name must contain only letters and no white space"
      );
    }

    if (/[^A-Za-z]/.test(lastName)) {
      setLastNameError(true);
      setLastNameErrorText(
        "Last name must contain only letters and no white space"
      );
    }

    if (password !== passwordConfirm) {
      setPasswordError(true);
      setPasswordErrorText("Passwords must match");
      return;
    } else {
      if (/[\n# $&:\n\t]/.test(username)) {
        setUsernameError(true);
        setUsernameErrorText("Username must not contain white spaces");
      }
      if (password.length < 6) {
        setPasswordError(true);
        setPasswordErrorText("Password must be greater than six characters");
        return;
      } else if (
        !/^(((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/.test(password)
      ) {
        setPasswordError(true);
        setPasswordErrorText(
          "Password must contain one or more numbers and letters"
        );
        return;
      } else {
        setSendingAlert(true);
        axios
          .post("/api/user", {
            firstName,
            lastName,
            username,
            password,
          })
          .then((res) => {
            setSendingAlert(false);
            setSentAlert(true);
            __clearInfo();
          })
          .catch((err) => {
            if (err.response.status === 422) {
              setUsernameError(true);
              setUsernameErrorText("Username already taken");
            }
          });
      }
    }
  };

  return (
    <Box
      height="67vh"
      mt="30px"
      mb="20px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" color="primary">
        <Box>Register</Box>
      </Typography>
      <form onSubmit={onSubmit} noValidate>
        <Box display="flex" flexDirection="column">
          <FormControl>
            <TextField
              required
              error={firstNameError}
              helperText={firstNameErrorText}
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              error={lastNameError}
              helperText={lastNameErrorText}
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              error={usernameError}
              helperText={usernameErrorText}
              required
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              error={passwordError}
              helperText={passwordErrorText}
              required
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              error={passwordError}
              helperText={passwordErrorText}
              required
              label="Confirm password"
              type="password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </FormControl>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
          <Typography variant="body1" color="primary">
            <Box textAlign="justify">
              Already have an account?{" "}
              <Link color="secondary" href="/sign-in">
                Sign in!
              </Link>
            </Box>
          </Typography>
        </Box>
      </form>
      {sendingAlert ? (
        <Alert severity="info">
          <AlertTitle>Creating account...</AlertTitle>
          Currently busy creating your account
        </Alert>
      ) : (
        ""
      )}
      {sentAlert ? (
        <Alert severity="success">
          <AlertTitle>Success!</AlertTitle>
          Your account was successfully created.
        </Alert>
      ) : (
        ""
      )}
    </Box>
  );
}
