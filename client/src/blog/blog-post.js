import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CircularProgress,
  Button,
  Link,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useParams, useHistory } from "react-router-dom";
import { convertFromRaw, EditorState } from "draft-js";
import Editor from "draft-js-plugins-editor";
import { userContext } from "../context/user-context";
import Prism from "prismjs";
import createPrismPlugin from "draft-js-prism-plugin";
import "prismjs/themes/prism.css";
import BlogPostComment from "./blog-post-comment";
import BlogPostCommentCreate from "./blog-post-comment-create";
import axios from "axios";

export default function BlogPost() {
  let { postId } = useParams();
  const [post, setPost] = useState({});
  const [postLoaded, setPostLoaded] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [commentChange, setCommentChange] = useState(false);
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`/api/posts/${postId}`)
      .then((res) => {
        setPost(res.data);
        setEditorState(
          EditorState.createWithContent(
            convertFromRaw(JSON.parse(res.data.content))
          )
        );
        setPostLoaded(true);
      })
      .catch((err) => {
        history.push("/404");
      });
  }, [commentChange]);

  const postComment = (content) => {
    axios
      .post(`/api/post/${postId}/comment`, {
        content,
      })
      .then((res) => {
        setCommentChange(!commentChange);
      })
      .catch((err) => console.error(err));
  };

  const deletePost = () => {
    axios
      .delete(`/api/posts/${postId}/delete`)
      .then((res) => {
        history.push("/blog");
      })
      .catch((err) => console.error(err));
  };

  const deleteComment = (commentId) => {
    axios
      .delete(`/api/post/${post.id}/comment/${commentId}`)
      .then((res) => {
        setCommentChange(!commentChange);
      })
      .catch((err) => console.error(err));
  };

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
        <userContext.Consumer>
          {(value) => {
            if (value.User && value.User.username === "God") {
              return (
                <Box style={{ float: "right" }} mr="20px" mt="20px" mb="20px">
                  <Button
                    onClick={deletePost}
                    width="100px"
                    variant="contained"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </Box>
              );
            }
          }}
        </userContext.Consumer>
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
          <Box mt="60px" pl="30px" pr="30px" mb="130px" textAlign="justify">
            <Editor
              editorState={editorState}
              plugins={[
                createPrismPlugin({
                  prism: Prism,
                }),
              ]}
              onChange={setEditorState}
              readOnly={true}
            />
          </Box>
          <Typography color="secondary">
            <Box ml="20px" mb="10px" fontSize="14px">
              Last updated on {new Date(post.updatedAt).toDateString()}
            </Box>
          </Typography>
        </Card>
        <Typography variant="h3" color="primary">
          <Box mt="20px" textAlign="center">
            Comments
          </Box>
        </Typography>
        <userContext.Consumer>
          {(value) =>
            value.User ? (
              <Box display="flex" justifyContent="center">
                <BlogPostCommentCreate postComment={postComment} />
              </Box>
            ) : (
              <Typography color="primary">
                <Box>
                  Want to post a comment? Register{" "}
                  <Link color="secondary" href="/register">
                    here
                  </Link>
                  , no email necessary!
                </Box>
              </Typography>
            )
          }
        </userContext.Consumer>
        {post.Comments.map((comment, index) => (
          <BlogPostComment
            key={index}
            userId={comment.User.id}
            commentId={comment.id}
            firstName={comment.User.firstName}
            lastName={comment.User.lastName}
            content={comment.content}
            createdAt={comment.createdAt}
            deleteComment={deleteComment}
          />
        ))}
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
