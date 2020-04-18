import React from "react";
import { Card, CardContent, Typography, Box } from "@material-ui/core";

export default function BlogPostComment({ firstName, lastName, content }) {
  return (
    <Box mt="20px">
      <Card>
        <CardContent>
          <Typography>
            <Box fontWeight="bold">{`${firstName} ${lastName}`}</Box>
          </Typography>
          <Typography>
            <Box>{content}</Box>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
