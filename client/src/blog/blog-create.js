import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CircularProgress,
  Box,
  Card,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Editor, EditorState, RichUtils } from "draft-js";
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

  const bold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
    console.log(editorState);
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
          <Button onClick={bold}>Bold</Button>
          <Button>Italics</Button>
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
