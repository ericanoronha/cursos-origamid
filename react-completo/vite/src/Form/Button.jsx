import React from 'react';

const Button = () => {
  const [ativo, setAtivo] = React.useState(false);
  // const ativoHook = React.useState(false);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];

  function handleClick(e) {
    e.preventDefault();
    setAtivo(!ativo);
  }

  return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>;
};

export default Button;
