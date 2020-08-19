import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <ul className="nav-elements">
        <li className="banner">
          <h1><Link to="/">Northern Sky</Link></h1>
          <p>Blogging in a time of Corona</p></li>
        <li><Link to="/all">All Posts</Link></li>
      </ul>
    </div>
  );
};

export default Header;