import React from 'react';
const Header = (props) => {
  return (
    <header
      style={{
        background: 'lightgray',
        textAlign: 'center',
        padding: '0.25rem',
      }}
    >
      {props.children}
    </header>
  );
};

export default Header;
