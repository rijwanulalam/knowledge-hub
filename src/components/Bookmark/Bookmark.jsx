import React from 'react';
import "./Bookmark.css";

const Bookmark = ({ bookmark, bookmarkBlogs }) => {
    // console.log(props.bookmark)
    let totalTime = 0;
    for(const time of bookmark){
        // console.log(typeof time.reading_time)
        totalTime = totalTime + time.reading_time;
    }
    return (
        <div className='bookmark'>
            <div className='total-time'>
                <p>Spent time on read : {totalTime} min</p>
            </div>
            <div className='bookmark-blogs'>
                <h2>Bookmarked Blogs : {bookmarkBlogs.length}</h2>
                <div>
                    {
                        bookmarkBlogs.map((bookmarkBlog, index) => <h4 className='bookmark-title' key={index}>{bookmarkBlog.title}</h4>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmark;