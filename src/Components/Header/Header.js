import React from 'react';
import './header.css';

function Header() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${'/header.jpg'})`
      }}
      className={'header'}>
      <p className="welcome">Welcome to</p>
      <h1 className="headerTitle">SIAMI WATERPARK</h1>
    </div>
  );
}

export default Header;
