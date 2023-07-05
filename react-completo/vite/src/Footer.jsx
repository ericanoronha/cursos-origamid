import React from 'react';
const Footer = (props) => {
  return (
    <footer
      style={{ background: 'gray', textAlign: 'center', padding: '0.25rem' }}
    >
      {props.children}
    </footer>
  );
};

export default Footer;
