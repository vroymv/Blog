//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

main().catch((err) => console.log(err));

var posts = [];
//Mongo DB connection
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  //?retryWrites=true&w=majority

  posts = await Blog.find();
}

//Creating Database Schema
const BlogSchema = new mongoose.Schema({
  postHead: String,
  postBody: String,
});

const Blog = new mongoose.model("Blog", BlogSchema);

app.get("/", async function (req, res) {
  try {
    posts = await Blog.find();
    res.render("home", {
      homeContent: homeStartingContent,
      postTitle: posts,
      blogContent: posts,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/posts/:post", function (req, res) {
  let reqDir = req.params.post;
  reqDir = _.lowerCase(reqDir);

  posts.forEach(function (post) {
    if (_.lowerCase(post.postHead) == reqDir) {
      res.render("post", {
        postTitle: post.postHead,
        postContent: post.postBody,
      });
    }
  });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose", {});
});

app.post("/compose", async function (req, res) {
  try {
    const newPost = new Blog({
      postHead: req.body.postTitle,
      postBody: req.body.blogPost,
    });

    await newPost.save();
  } catch (error) {
    console.log(error);
  } finally {
    res.redirect("/");
  }
});

app.listen(port, function () {
  console.log("Server started on port 3000");
});
