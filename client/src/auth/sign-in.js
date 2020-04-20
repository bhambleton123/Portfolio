import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  makeStyles,
  Link,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  button: {
    marginTop: "20px",
  },
});

export default function SignIn({ setUser }) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  let history = useHistory();

  const login = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", {
        username,
        password,
      })
      .then((res) => {
        setUser(res.data);
        history.push("/blog");
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 500) {
          setError(true);
          setHelperText("Invalid username or password");
        }
      });
  };

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
        <Box>Sign In</Box>
      </Typography>
      <form noValidate onSubmit={login}>
        <Box display="flex" flexDirection="column">
          <FormControl>
            <TextField
              error={error}
              helperText={helperText}
              label="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              error={error}
              type="password"
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </FormControl>
          <Button
            type="submit"
            className={classes.button}
            variant="outlined"
            color="primary"
          >
            Submit
          </Button>
          <Typography variant="body1" color="primary">
            <Box textAlign="justify">
              Don't have an account? Register{" "}
              <Link color="secondary" href="/register">
                here
              </Link>
            </Box>
          </Typography>
        </Box>
      </form>
    </Box>
  );
}
