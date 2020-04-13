import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BlogPostHome from "./blog-post-home";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios
      .get("api/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Typography variant="h2" color="primary">
        <Box textAlign="center" mt="40px">
          Cool articles I've written
        </Box>
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt="40px"
      >
        {posts.map((post) => (
          <BlogPostHome
            onClickFunc={() => history.push(`/blog/${post.id}`)}
            title={post.title}
            description={post.description}
            name={`${post.User.firstName} ${post.User.lastName}`}
          />
        ))}
      </Box>
    </>
  );
}
