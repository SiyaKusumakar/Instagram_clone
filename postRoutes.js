const express = require("express");
const {
  createPost,
  getAllPosts,
  likeUnlikePost,
  addComment,
  deletePost,
} = require("../controller/postController");

const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/post/new").post(isAuthenticatedUser, createPost);
router.route("/posts").get(isAuthenticatedUser, getAllPosts);
router.route("/post/:id/like").put(isAuthenticatedUser, likeUnlikePost);
router.route("/post/:id/comment").put(isAuthenticatedUser, addComment);
router.route("/post/:id").delete(isAuthenticatedUser, deletePost);

module.exports = router;
