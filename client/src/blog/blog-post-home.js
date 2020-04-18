import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: "85%",
  },
});

export default function BlogPostHome({
  title,
  description,
  name,
  onClickFunc,
  createdAt,
}) {
  const classes = useStyles();
  return (
    <Box className={classes.card} mb="20px" ml="10px" mr="10px">
      <Card onClick={onClickFunc} width="60vw">
        <CardActionArea>
          <CardContent>
            <Typography variant="h4">
              <Box>{title}</Box>
              <Box fontSize="20px">
                by {name} - {new Date(createdAt).toDateString()}
              </Box>
            </Typography>
            <Typography color="secondary">
              <Box fontSize="16px">{description}</Box>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
