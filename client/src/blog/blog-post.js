import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BlogPost() {
  let { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`/api/posts/${postId}`)
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Typography variant="h3" color="primary">
        <Box textAlign="center">{post.title}</Box>
      </Typography>
    </>
  );
}
