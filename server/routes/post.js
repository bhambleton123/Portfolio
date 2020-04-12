const router = require("express").Router();
const postsController = require("../controllers/post");

router.get("/", postsController.getPosts);
router.post("/create", postsController.createPost);
router.put("/:postId/edit", postsController.editPost);
router.delete("/:postId/delete", postsController.deletePost);

module.exports = router;
