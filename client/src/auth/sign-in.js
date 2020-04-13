import React from "react";
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

const useStyles = makeStyles({
  button: {
    marginTop: "20px",
  },
});

export default function SignIn() {
  const classes = useStyles();
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
          <InputLabel>Username</InputLabel>
          <Input></Input>
        </FormControl>
        <FormControl>
          <TextField type="password" label="password"></TextField>
        </FormControl>
        <Button className={classes.button} variant="outlined" color="primary">
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
