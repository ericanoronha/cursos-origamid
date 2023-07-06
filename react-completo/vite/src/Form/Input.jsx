import React from 'react';

const Input = ({
  label,
  tipo,
  obrigatorio = false,
  ativo = true,
  ...props
}) => {
  const labelCapitalized = label.charAt(0).toUpperCase() + label.slice(1);
  console.log(label, ativo);

  return (
    <p>
      <label htmlFor={label}>
        {labelCapitalized.replace(/-/g, ' ').concat(':')}
      </label>
      <input
        type={tipo}
        id={label}
        required={obrigatorio}
        disabled={!ativo}
        {...props}
      />
    </p>
  );
};

export default Input;
