import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const {
    author,
    author_img,
    hashtags,
    posted_date,
    reading_time,
    title,
    cover,
  } = props.blog;

  const handleReadButton = props.handleReadButton;
  const handleBookmarkButton = props.handleBookmarkButton;

  return (
    <div className="blog-container">
      <img className="cover" src={cover} alt="" />
      <div className="info">
        <div className="author">
          <div>
            <img src={author_img} alt="" />
          </div>
          <div>
            <h4>{author}</h4>
            <small>{posted_date}</small>
          </div>
        </div>
        <div className="time-container">
          <p>{reading_time} mins read</p>
          <span onClick={() => handleBookmarkButton(props.blog)} className="material-symbols-outlined">bookmark</span>
        </div>
      </div>
      <h1>{title}</h1>
      <div className="hashtags">
        {hashtags.map((hashtag, index) => (
          <p key={index}>#{hashtag}</p>
        ))}
      </div>
      <p onClick={() => handleReadButton(props.blog)} className="mark-btn">
        Mark as read
      </p>
    </div>
  );
};

export default Blog;
