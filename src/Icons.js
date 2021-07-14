import React from 'react'
import {FaSearch,FaUser,FaShoppingCart} from 'react-icons/fa';
const Icons = () => {
    return (
      <div className="icon-group">
        <a href="#">
          <FaSearch/>
        </a>
        <a href="#">
          <FaUser/>
          Sign In
        </a>
        <a href="#">
          <FaShoppingCart/>
        </a>
      </div>
    );
}

export default Icons
