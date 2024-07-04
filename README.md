<!-- Banner Image, Landing Page Of Computer Vision Site -->
<div align="center">
  <br />
    <a href="">
      <img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/BlogBanner.png?alt=media&token=db1f20d7-c512-40ed-ae7d-d1f87c092744" alt="Project Banner">
    
  <br />

  <div>
    <img src="https://img.shields.io/badge/node-js?style=for-the-badge&logo=nodedotjs&logoColor=white&label=Node%20JS" alt="Node JS" />
    <img src="https://img.shields.io/badge/mongodb-purple?style=for-the-badge&logo=mongodb&logoColor=white&color=%2347A248" alt="Mongo DB" />
    
    
  </div>

  <h1 align="center">Blog</h1>

   <div align="center">
     <h4>A simple blog site with Ejs templating</h4>
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. ⚙️ [Hardware Output](#hardwareoutput)

## 🚨 About

...

## <a name="introduction">🤖 Introduction</a>

...

## <a name="tech-stack">⚙️ Tech Stack</a>

- Nodoe JS - for the server
- Mongo DB - as the database
- Express - for the server
- Ejs - for the templating

## <a name="features">🔋 Features</a>

👉 **Home Screen**: View all available blogs

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/BlogBanner.png?alt=media&token=db1f20d7-c512-40ed-ae7d-d1f87c092744" alt="Home">

👉 **Compose Screen**: Draft up your blogs

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/CreateBlog.png?alt=media&token=b7183559-6305-41c1-b8af-f9d9f6072da3" alt="Create Post">

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/vroymv/Blog.git
cd Blog\ Site
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
nodemon app.js
```

**Setup Mongo DB**

Create Mongo Atlas account <br>
<br>

## <a name="snippets">🕸️ Snippets</a>

**Modify the following In your Code**

<details>
<summary><code>app.js</code></summary>
Replace process.env.MONGO_URL with your mongo connection string

```javascript
//Mongo DB connection
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  //?retryWrites=true&w=majority

  posts = await Blog.find();
}
```

</details>

## <a name="links">🔗 Links</a>

Create a mongo account here (https://www.mongodb.com/docs/atlas/tutorial/create-atlas-account/)
