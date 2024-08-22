import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Public University Students Association of Kalihati</h1>
      {/* You can add navigation links or a logo here */}
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
