import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  card: {
    backgroundColor: grey[500],
    display: "inline-block",
    marginRight: "20px",
  },
});

export default function Skill({ name }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Typography color="primary">
          <Box textAlign="center" ml="10px" mr="10px" fontSize="17px">
            {name}
          </Box>
        </Typography>
      </CardActionArea>
    </Card>
  );
}
