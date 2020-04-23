import React, { useEffect, useState } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
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
import {
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  Modifier,
  AtomicBlockUtils,
} from "draft-js";
import Editor, { composeDecorators } from "draft-js-plugins-editor";
import Prism from "prismjs";
import createPrismPlugin from "draft-js-prism-plugin";
import createListPlugin from "draft-js-list-plugin";
import createImagePlugin from "draft-js-image-plugin";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createResizeablePlugin from "draft-js-resizeable-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createToolbarPlugin from "draft-js-static-toolbar-plugin";
import "draft-js-image-plugin/lib/plugin.css";
import "draft-js-alignment-plugin/lib/plugin.css";
import "draft-js-focus-plugin/lib/plugin.css";
import "draft-js-static-toolbar-plugin/lib/plugin.css";
import axios from "axios";

const prismPlugin = createPrismPlugin({
  prism: Prism,
});
const listPlugin = createListPlugin();
const focusPlugin = createFocusPlugin();
const alignmentPlugin = createAlignmentPlugin();
const resizeablePlugin = createResizeablePlugin();
const toolbarPlugin = createToolbarPlugin();

const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  focusPlugin.decorator,
  alignmentPlugin.decorator,
  resizeablePlugin.decorator
);

const imagePlugin = createImagePlugin({
  decorator,
});

const plugins = [
  toolbarPlugin,
  prismPlugin,
  listPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin,
];

export default function BlogEditor() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(false);
  const [fileErrorText, setFileErrorText] = useState("");

  let history = useHistory();
  let { postId } = useParams();
  let location = useLocation();

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

    if (location.pathname.split("/")[2] === "update") {
      axios
        .get(`/api/posts/${postId}`)
        .then((res) => {
          setEditorState(
            EditorState.createWithContent(
              convertFromRaw(JSON.parse(res.data.content))
            )
          );
          setTitle(res.data.title);
          setDescription(res.data.description);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  useEffect(() => {
    const selection = editorState.getSelection();
    const block = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey());
    if (block.getType() === "code-block") {
      const data = block.getData().merge({ language: "javascript" });
      const newBlock = block.merge({ data });
      const newContentState = editorState.getCurrentContent().merge({
        blockMap: editorState
          .getCurrentContent()
          .getBlockMap()
          .set(selection.getStartKey(), newBlock),
        selectionAfter: selection,
      });
      setEditorState(
        EditorState.push(editorState, newContentState, "change-block-data")
      );
    }
  }, [editorState]);

  const submit = () => {
    location.pathname.split("/")[2] === "update" ? updatePost() : submitPost();
  };

  const updatePost = () => {
    axios
      .put(`/api/posts/${postId}/edit`, {
        title,
        description,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      })
      .then((res) => {
        history.push(`/blog/post/${postId}`);
      })
      .catch((err) => console.error(err));
  };

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

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  const uploadImage = (e) => {
    e.preventDefault();
    if (file !== null) {
      setFileError(false);
      setFileErrorText("");
      let formData = new FormData();
      formData.append("image", file[0]);
      axios
        .post("/api/posts/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          const contentState = editorState.getCurrentContent();
          const selection = editorState.getSelection();
          const contentStateWithEntity = contentState.createEntity(
            "IMAGE",
            "IMMUTABLE",
            {
              src: res.data,
            }
          );
          const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
          const contentStateWithImage = Modifier.applyEntity(
            contentStateWithEntity,
            selection,
            entityKey
          );
          const newEditorState = EditorState.push(
            editorState,
            contentStateWithImage
          );
          setEditorState(
            AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, " ")
          );
        })
        .catch((err) => {
          setFileErrorText(true);
          setFileErrorText("Error sending to S3");
          console.log(err);
        });
    } else {
      setFileError(true);
      setFileErrorText("Select a file to upload");
    }
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

    setEditorState(RichUtils.toggleCode(editorState));
  };

  const onTab = (e) => {
    e.preventDefault();

    let newContentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      "    "
    );

    setEditorState(
      EditorState.push(editorState, newContentState, "insert-characters")
    );
  };

  const classes = makeStyles({
    card: {
      width: "70vw",
      minHeight: "60vh",
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
          <Box>
            {location.pathname.split("/")[2] === "update"
              ? "Update Post"
              : "Create Post"}
          </Box>
        </Typography>
        <Box display="flex" flexDirection="column" mb="10px">
          <FormControl>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              label="title"
              value={title}
            />
          </FormControl>
          <FormControl margin="dense">
            <TextareaAutosize
              rows={5}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></TextareaAutosize>
          </FormControl>
          <Typography color="primary" variant="h6">
            <Box display="flex" flexDirection="column">
              <Box>Image upload:</Box>
              <input type="file" onChange={(e) => setFile(e.target.files)} />
              <Box mt="10px">
                <Button
                  variant="outlined"
                  onMouseDown={uploadImage}
                  error={fileError}
                  helperText={fileErrorText}
                >
                  Upload
                </Button>
              </Box>
            </Box>
          </Typography>
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
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            plugins={plugins}
            onTab={onTab}
            spellCheck={true}
          />
          <AlignmentTool />
        </Card>
        <Box mt="10px">
          <Button onClick={submit} variant="outlined">
            {location.pathname.split("/")[2] === "update" ? "Update" : "Submit"}
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
