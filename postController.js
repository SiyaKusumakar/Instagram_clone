const Post = require("../models/Post");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");

/* CREATE POST */
exports.createPost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.create({
    caption: req.body.caption,
    images: req.body.images,
    user: req.user.id,
  });

  res.status(201).json({
    success: true,
    post,
  });
});

/* GET ALL POSTS */
exports.getAllPosts = catchAsyncErrors(async (req, res, next) => {
  const posts = await Post.find()
    .populate("user", "name avatar")
    .populate("comments.user", "name avatar");

  res.status(200).json({
    success: true,
    posts,
  });
});

/* LIKE / UNLIKE POST */
exports.likeUnlikePost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(new ErrorHandler("Post not found", 404));
  }

  const liked = post.likes.find(
    (like) => like.user.toString() === req.user.id.toString()
  );

  if (liked) {
    post.likes = post.likes.filter(
      (like) => like.user.toString() !== req.user.id.toString()
    );
  } else {
    post.likes.push({ user: req.user.id });
  }

  await post.save();

  res.status(200).json({
    success: true,
    message: liked ? "Post unliked" : "Post liked",
  });
});

/* ADD COMMENT */
exports.addComment = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(new ErrorHandler("Post not found", 404));
  }

  post.comments.push({
    user: req.user.id,
    comment: req.body.comment,
  });

  await post.save();

  res.status(200).json({
    success: true,
    message: "Comment added",
  });
});

exports.followUnfollowUser = catchAsyncErrors(async (req, res, next) => {
  const userToFollow = await User.findById(req.params.id);
  const loggedInUser = await User.findById(req.user.id);

  if (!userToFollow) {
    return next(new ErrorHandler("User not found", 404));
  }

  if (req.user.id === req.params.id) {
    return next(new ErrorHandler("You cannot follow yourself", 400));
  }

  const isFollowing = loggedInUser.following.find(
    (f) => f.user.toString() === req.params.id.toString()
  );

  if (isFollowing) {
    // UNFOLLOW
    loggedInUser.following = loggedInUser.following.filter(
      (f) => f.user.toString() !== req.params.id.toString()
    );

    userToFollow.followers = userToFollow.followers.filter(
      (f) => f.user.toString() !== req.user.id.toString()
    );

    await loggedInUser.save();
    await userToFollow.save();

    res.status(200).json({
      success: true,
      message: "User unfollowed",
    });
  } else {
    // FOLLOW
    loggedInUser.following.push({ user: req.params.id });
    userToFollow.followers.push({ user: req.user.id });

    await loggedInUser.save();
    await userToFollow.save();

    res.status(200).json({
      success: true,
      message: "User followed",
    });
  }
});


/* DELETE POST */
exports.deletePost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(new ErrorHandler("Post not found", 404));
  }

  if (post.user.toString() !== req.user.id.toString()) {
    return next(new ErrorHandler("Unauthorized", 401));
  }

  await post.deleteOne();

  res.status(200).json({
    success: true,
    message: "Post deleted",
  });
});
