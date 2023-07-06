import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  // Utilizamos o useEffect para adicionarmos eventos direto ao DOM
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    // Limpa o evento quando o elemento é removido do DOM.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <form>
      <h2>Preencha os campos a seguir:</h2>
      <Input label="nome" tipo="text" obrigatorio />
      <Input label="telefone" tipo="tel" placeholder="(XX) XXXX-XXXX" />
      <Input label="data-de-nascimento" tipo="date" obrigatorio />
      <Input label="email" tipo="email" />
      <Input label="foto" tipo="file" accept=".jpg" ativo={false} />
      <Button />
    </form>
  );
};

export default Form;
