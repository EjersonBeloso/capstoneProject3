const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Blogs = require("../models/blogs");
const { User } = require("../models/users");
const multer = require('multer')

//Multer
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname)
      if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
          return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
      }
      cb(null, true)
  }
});

const upload = multer({ storage: storage }).single("file");


//Upload files
router.post('/uploadfiles', async(req, res) => {
  upload(req, res, err => {
      if (err) {
          return res.json({ success: false, err });
      }
      
      return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename });
  });
  
});

//View blogs
router.get("/", async (req, res, next) => {
  let blogs;

  try {
    blogs = await Blogs.find().populate("user");
  } catch (error) {
    return console.log(error);
  }

  if (!blogs) {
    return res.status(404).json({ message: "No Blogs Found" });
  }

  return res.status(200).json({ blogs });
});

//View By ID
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blogs.findById(id);
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(404).json({ message: "No Blog Found" });
  }
  return res.status(200).json({ blog });
});

//Create blog
router.post("/create", async (req, res, next) => {
  const { title, description, content, user } = req.body;

  let existingUser;

  try {
    existingUser = await User.findById(user);
  } catch (error) {
    if (!existingUser) {
      return res.status(400).json({ message: "Cannot Find User By This ID" });
    }
  }

  const blog = new Blogs({
    user,
    title,
    description,
    content,
    
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
  return res.status(200).json({ blog });
});

//Update blog
router.put("/edit/:id", async (req, res, next) => {
  const { title, description, content } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blogs.findByIdAndUpdate(blogId, {
      title,
      description,
      content,
    });
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: "Cannot update blog" });
  }
  return res.status(200).json({ blog });
});

//Delete blog
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blogs.findByIdAndRemove(id).populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(404).json({ message: "No Blogs Found" });
  }
  return res.status(200).json({ message: "Blog Succesfully Deleted" });
});

router.get("/user/:id", async (req, res, next) => {
  const userId = req.params.id;
  let userBlogs;
  try {
    userBlogs = await User.findById(userId).populate("blogs");
  } catch (error) {
    return console.log(error);
  }
  if (!userBlogs) {
    return res.status(404).json({ messege: "No Blog Found" });
  }
  return res.status(200).json({ user: userBlogs });
});

module.exports = router;