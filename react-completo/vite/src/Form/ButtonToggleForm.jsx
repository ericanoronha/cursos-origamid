import React from 'react';

const ButtonToggleForm = (props) => {
  return (
    <button style={{ marginBottom: '2rem' }} {...props}>
      {props.children}
    </button>
  );
};

export default ButtonToggleForm;
