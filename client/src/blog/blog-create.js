import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CircularProgress,
  Box,
  Card,
  makeStyles,
  Button,
  ButtonGroup,
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
  let history = useHistory();

  useEffect(() => {
    axios.get("/api/user").then((res) => {
      if (!res.data.User || res.data.User.username !== "God") {
        history.push("/blog");
      } else {
        setIsAuthorized(true);
      }
    });
  }, []);

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
    setEditorState(RichUtils.toggleInlineStyle(editorState, "CODE"));
    console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
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
        mt="200px"
        pb="200px"
      >
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
          />
        </Card>
        <Button>Submit</Button>
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
