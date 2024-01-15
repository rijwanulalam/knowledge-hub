import React from 'react';
import "./Header.css";
import userImage from "../../assets/images/profile.png";

const Header = () => {
    return (
        <div className='head'>
                <p><span className='logo'>K</span>nowledge <span className='logo'>H</span>UB</p>
                <img src={userImage} alt="" />
        </div>
    );
};

export default Header;