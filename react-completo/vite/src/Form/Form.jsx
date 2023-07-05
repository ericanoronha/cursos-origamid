import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <Input label={'nome'} tipo={'text'} obrigatorio />
      <Input label={'telefone'} tipo={'tel'} />
      <Input label={'data-de-nascimento'} tipo={'date'} obrigatorio />
      <Input label={'email'} tipo={'email'} />
      <Button />
    </form>
  );
};

export default Form;
