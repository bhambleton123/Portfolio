import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  Input,
  InputLabel,
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
  let history = useHistory();
  const login = () => {
    axios
      .post("/api/login", {
        username,
        password,
      })
      .then((res) => {
        setUser(res.data);
        history.push("/blog");
      })
      .catch((err) => console.error(err));
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
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" color="primary">
        <Box>Sign In</Box>
      </Typography>
      <Box display="flex" flexDirection="column">
        <FormControl>
          <InputLabel>username</InputLabel>
          <Input onChange={(e) => setUsername(e.target.value)}></Input>
        </FormControl>
        <FormControl>
          <TextField
            type="password"
            label="password"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </FormControl>
        <Button
          onClick={login}
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
    </Box>
  );
}
