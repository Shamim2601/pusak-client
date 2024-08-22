import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h4>Public University Students Association of Kalihati</h4>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center'
};

export default Header;
