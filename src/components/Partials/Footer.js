import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 PUSAK. Developed by Shamim [ Cse, BUET ].</p>
    </footer>
  );
}

const footerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%'
};

export default Footer;
