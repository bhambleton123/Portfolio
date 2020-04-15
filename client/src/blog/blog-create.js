import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CircularProgress,
  Box,
  Card,
  makeStyles,
  Button,
  ButtonGroup,
  FormControl,
  TextField,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import CodeIcon from "@material-ui/icons/Code";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import axios from "axios";

export default function BlogCreate() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let history = useHistory();

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => {
        if (!res.data.User || res.data.User.username !== "God") {
          history.push("/blog");
        } else {
          setIsAuthorized(true);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const submitPost = () => {
    axios
      .post("/api/posts/create", {
        title,
        description,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      })
      .then((res) => {
        history.push("/blog");
      })
      .catch((err) => console.error(err));
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  const bold = (e) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const italic = (e) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const underline = (e) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const code = (e) => {
    e.preventDefault();
  };

  const classes = makeStyles({
    card: {
      width: "70vw",
      height: "60vh",
    },
  })();

  return isAuthorized ? (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="space-between"
        mt="75px"
        pb="200px"
      >
        <Typography variant="h3" color="primary">
          <Box>Create post</Box>
        </Typography>
        <Box display="flex" flexDirection="column" mb="10px">
          <FormControl>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              label="title"
            />
          </FormControl>
          <FormControl margin="dense">
            <TextareaAutosize
              rows={5}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></TextareaAutosize>
          </FormControl>
        </Box>
        <Card className={classes.card}>
          <ButtonGroup>
            <Button onMouseDown={bold}>
              <FormatBoldIcon fontSize="small" />
            </Button>
            <Button onMouseDown={italic}>
              <FormatItalicIcon fontSize="small" />
            </Button>
            <Button onMouseDown={underline}>
              <FormatUnderlinedIcon fontSize="small" />
            </Button>
            <Button onMouseDown={code}>
              <CodeIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
            spellCheck={true}
          />
        </Card>
        <Box mt="10px">
          <Button onClick={submitPost} variant="outlined">
            Submit
          </Button>
        </Box>
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
