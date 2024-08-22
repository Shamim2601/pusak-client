import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <Link to="/" style={linkStyle}>
        <h4>Public University Students Association of Kalihati</h4>
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  cursor: 'pointer'  // Indicates that the header is clickable
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff'  // Ensures the text color is consistent with the header
};

export default Header;
