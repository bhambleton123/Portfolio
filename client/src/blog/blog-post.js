import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";

export default function BlogPost() {
  let { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`/api/posts/${postId}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Box
        ml="10vw"
        mr="10vw"
        mt="40px"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="h3" color="primary">
          <Box textAlign="center">{post.title}</Box>
        </Typography>
        <Typography variant="body1" color="primary">
          <Box textAlign="center">{post.description}</Box>
        </Typography>
        <Typography color="primary">
          <Box mt="60px" mb="130px" textAlign="justify">
            {ReactHtmlParser(post.content)}
          </Box>
        </Typography>
      </Box>
    </>
  );
}
