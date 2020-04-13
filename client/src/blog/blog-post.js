import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CircularProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";

export default function BlogPost() {
  let { postId } = useParams();
  const [post, setPost] = useState({});
  const [postLoaded, setPostLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/posts/${postId}`)
      .then((res) => {
        setPost(res.data);
        setPostLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return postLoaded ? (
    <>
      <Box
        ml="10vw"
        mr="10vw"
        mt="40px"
        pb="200px"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Card variant="outlined">
          <Typography variant="h3">
            <Box textAlign="center" pl="30px" pr="30px" pt="30px">
              {post.title}
            </Box>
          </Typography>
          <Typography variant="body1">
            <Box textAlign="center" pl="30px" pr="30px">
              {`By ${post.User.firstName} ${post.User.lastName}`}
            </Box>
          </Typography>
          <Typography variant="body1" color="secondary">
            <Box textAlign="center" pl="30px" pr="30px">
              {post.description}
            </Box>
          </Typography>
          <Typography>
            <Box mt="60px" pl="30px" pr="30px" mb="130px" textAlign="justify">
              {ReactHtmlParser(post.content)}
            </Box>
          </Typography>
        </Card>
      </Box>
    </>
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
    >
      <CircularProgress />
    </Box>
  );
}
