import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [bookmarkBlogs, setBookmarkBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleReadButton = (blog) => {
    const newBookmark = [...bookmark, blog]
    setBookmark(newBookmark);
}
const handleBookmarkButton = (blog) => {
    const newBookmarkBlogs = [...bookmarkBlogs, blog]
    setBookmarkBlogs(newBookmarkBlogs);
}

  return (
    <div className="blogs-container">
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} handleReadButton={handleReadButton} handleBookmarkButton={handleBookmarkButton}></Blog>
        ))}
      </div>
      <div className='bookmark-container'>
        <Bookmark bookmark={bookmark} bookmarkBlogs={bookmarkBlogs}></Bookmark>
      </div>
    </div>
  );
};

export default Blogs;
