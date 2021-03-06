import React, { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { userContext } from "../context/user-context";
import axios from "axios";
import BlogPostHome from "./blog-post-home";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [receivedPosts, setReceivedPosts] = useState(false);
  let history = useHistory();

  useEffect(() => {
    axios
      .get("api/posts")
      .then((res) => {
        setPosts(res.data);
        setReceivedPosts(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return receivedPosts ? (
    <>
      <Typography variant="h2" color="primary">
        <Box textAlign="center" mt="40px">
          Articles I've written
        </Box>
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt="40px"
        pb="200px"
      >
        {posts.map((post) => (
          <BlogPostHome
            key={post.id}
            onClickFunc={() => history.push(`/blog/post/${post.id}`)}
            title={post.title}
            description={post.description}
            createdAt={post.createdAt}
            name={`${post.User.firstName} ${post.User.lastName}`}
          />
        ))}
        <userContext.Consumer>
          {(value) =>
            value.User && value.User.username === "God" ? (
              <Button
                onClick={() => history.push("/blog/create")}
                variant="outlined"
                color="primary"
              >
                Create post
              </Button>
            ) : (
              ""
            )
          }
        </userContext.Consumer>
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
