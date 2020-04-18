import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { userContext } from "../context/user-context";

export default function BlogPostComment({
  firstName,
  lastName,
  commentId,
  content,
  userId,
  deleteComment,
}) {
  console.log(userId, "hello");
  return (
    <Box mt="20px">
      <Card>
        <CardContent>
          <userContext.Consumer>
            {(value) =>
              (value.User && value.User.id === userId) ||
              (value.User && value.User.username === "God") ? (
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    onClick={() => deleteComment(commentId)}
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </Box>
              ) : (
                ""
              )
            }
          </userContext.Consumer>
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
