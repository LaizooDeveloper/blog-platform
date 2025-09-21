# Blog Platform

A simple **React.js Blog Platform** with full CRUD functionality.  
Users (visitors) can **view, add, edit, and delete posts**. The project uses **React, React Router, Bootstrap, Axios, and JSON Server** as a mock backend.

---

## Features

- Display all blog posts  
- View post details  
- Add new posts (any visitor)  
- Edit posts (any visitor)  
- Delete posts (any visitor)  
- Responsive UI with **Bootstrap**  
- Search posts by title  

---

## Project Structure

blog-platform/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── PostItem.jsx
│   │   └── PostList.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── PostDetails.jsx
│   │   ├── CreatePost.jsx
│   │   ├── EditPost.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.js
│   └── index.js
│
├── db.json
├── package.json
└── README.md


---

## Dependencies

- React.js
- React Router DOM
- Axios
- Bootstrap
- JSON Server (for backend)

---

## Installation & Setup

```bash
git clone <your-repo-link>
cd blog-platform
npm install
npm install -g json-server
# Create db.json in the project root with initial data
# {
#   "posts": [
#     {
#       "id": 1,
#       "title": "Welcome Post",
#       "content": "This is the first post of the blog platform."
#     }
#   ]
# }
json-server --watch db.json --port 5000
npm start
```