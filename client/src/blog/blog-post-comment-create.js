import React, { useState } from "react";
import { Box, TextareaAutosize, Button } from "@material-ui/core";
import axios from "axios";

export default function BlogPostCommentCreate({ postComment }) {
  const [commentText, setCommentText] = useState("");

  const postCommentAndClear = () => {
    postComment(commentText);
    setCommentText("");
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="70vw"
    >
      <TextareaAutosize
        onChange={(e) => setCommentText(e.target.value)}
        value={commentText}
        required
        rows={6}
        placeholder="Write comment"
      />
      <Box mt="10px">
        <Button
          variant="outlined"
          color="primary"
          onClick={postCommentAndClear}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
