const router = require("express").Router();
const commentsController = require("../controllers/comments");

router.post("/post/:postId/comment", commentsController.createComment);
router.put(
  "/post/:postId/comment/:commentId",
  commentsController.updateComment
);
router.delete(
  "/post/:postId/comment/:commentId",
  commentsController.deleteComment
);

module.exports = router;
