import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleReadButton = (blog) => {
    const newBookmark = [...bookmark, blog]
    setBookmark(newBookmark);
}

  return (
    <div className="blogs-container">
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} handleReadButton={handleReadButton}></Blog>
        ))}
      </div>
      <div>
        <Bookmark bookmark={bookmark}></Bookmark>
      </div>
    </div>
  );
};

export default Blogs;
