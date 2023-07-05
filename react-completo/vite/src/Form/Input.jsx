import React from 'react';

const Input = ({ label, tipo, obrigatorio = false }) => {
  const labelCapitalized = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <p>
      <label htmlFor={label}>
        {labelCapitalized.replace(/-/g, ' ').concat(':')}
      </label>
      <input type={tipo} id={label} required={obrigatorio} />
    </p>
  );
};

export default Input;
