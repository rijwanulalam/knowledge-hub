import React from 'react';
import "./Bookmark.css";

const Bookmark = ({ bookmark }) => {
    // console.log(props.bookmark)
    let totalTime = 0;
    for(const time of bookmark){
        // console.log(typeof time.reading_time)
        totalTime = totalTime + time.reading_time;
    }
    return (
        <div className='bookmark-container'>
            <div className='total-time'>
                <p>Spent time on read : {totalTime} min</p>
            </div>
        </div>
    );
};

export default Bookmark;