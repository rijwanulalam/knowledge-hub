import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blogs-container">
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      <div>
        <p>This is Bookmark</p>
      </div>
    </div>
  );
};

export default Blogs;
