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
import EditIcon from "@material-ui/icons/Edit";
import { useParams, useHistory } from "react-router-dom";
import { convertFromRaw, EditorState } from "draft-js";
import Editor, { composeDecorators } from "draft-js-plugins-editor";
import { userContext } from "../context/user-context";
import Prism from "prismjs";
import createPrismPlugin from "draft-js-prism-plugin";
import createImagePlugin from "draft-js-image-plugin";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createResizeablePlugin from "draft-js-resizeable-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import "draft-js-image-plugin/lib/plugin.css";
import "draft-js-alignment-plugin/lib/plugin.css";
import "prismjs/themes/prism.css";
import BlogPostComment from "./blog-post-comment";
import BlogPostCommentCreate from "./blog-post-comment-create";
import axios from "axios";

const prismPlugin = createPrismPlugin({
  prism: Prism,
});
const focusPlugin = createFocusPlugin();
const alignmentPlugin = createAlignmentPlugin();
const resizeablePlugin = createResizeablePlugin();

const decorator = composeDecorators(
  focusPlugin.decorator,
  alignmentPlugin.decorator,
  resizeablePlugin.decorator
);

const imagePlugin = createImagePlugin({
  decorator,
});

const plugins = [prismPlugin, alignmentPlugin, resizeablePlugin, imagePlugin];

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

  const updatePost = () => {
    history.push(`/blog/update/${postId}`);
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
                <Box display="flex" mr="20px" mt="20px" mb="20px">
                  <Button
                    style={{ marginRight: "10px" }}
                    onClick={updatePost}
                    width="100px"
                    variant="outlined"
                    color="primary"
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={deletePost}
                    width="100px"
                    variant="outlined"
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
              plugins={plugins}
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
