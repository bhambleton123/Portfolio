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
  return (
    <Box mt="20px">
      <userContext.Consumer>
        {(value) =>
          (value.User && value.User.id === userId) ||
          (value.User && value.User.username === "God") ? (
            <Box display="flex" justifyContent="flex-end" mb="10px">
              <Button
                onClick={() => deleteComment(commentId)}
                startIcon={<DeleteIcon />}
                variant="outlined"
                color="primary"
              >
                Delete
              </Button>
            </Box>
          ) : (
            ""
          )
        }
      </userContext.Consumer>
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
