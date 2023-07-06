import React from 'react';

const Button = () => {
  const ativoHook = React.useState(false);
  const ativoValor = ativoHook[0];
  const atualizaValor = ativoHook[1];
  //console.log(ativoValor);
  function handleClick(e) {
    e.preventDefault();
    atualizaValor(!ativoValor);
  }

  return (
    <button onClick={handleClick}>{ativoValor ? 'Ativo' : 'Inativo'}</button>
  );
};

export default Button;
