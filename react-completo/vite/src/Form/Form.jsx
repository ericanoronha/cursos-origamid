import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
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
