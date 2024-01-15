import React from 'react';
import "./Blog.css";

const Blog = (props) => {
    const {author, author_img, hashtags, posted_date, reading_time, title, cover} = props.blog;

    return (
        <div className='blog-container'>
            <img className='cover' src={cover} alt="" />
            <div className='info'>
                <div className='author'>
                    <div>
                        <img src={author_img} alt="" />
                    </div>
                    <div>
                        <h4>{author}</h4>
                        <small>{posted_date}</small>
                    </div>
                </div>
                <div>
                    <p>{reading_time} mins read</p>
                </div>
            </div>
            <h1>{title}</h1>
            <div className='hashtags'>
            {
                hashtags.map(hashtag => <p>#{hashtag}</p>)
            }
            </div>
            <p className='mark-btn'>Mark as read</p>
            
        </div>
    );
};

export default Blog;