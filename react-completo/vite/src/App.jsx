import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const App = () => {
  return (
    <React.Fragment>
      <Header>Cabeçalho</Header>
      <Titulo cor="var(--color-dark)" texto="Cadastro" />
      <p>Preencha os campos:</p>
      <Form />
      <Footer>Rodapé</Footer>
    </React.Fragment>
  );
};

export default App;
