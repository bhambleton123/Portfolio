const router = require("express").Router();
const postsController = require("../controllers/post");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", postsController.getPosts);
router.get("/:postId", postsController.getPostById);
router.post("/create", postsController.createPost);
router.post(
  "/image",
  upload.single("image"),
  postsController.uploadAndReceiveImage
);
router.put("/:postId/edit", postsController.editPost);
router.delete("/:postId/delete", postsController.deletePost);

module.exports = router;
