import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';
import Trigger from './Modal/Trigger';
import Modal from './Modal/Modal';

const Titulo = (props) => {
  return (
    <>
      <h1 style={{ color: props.cor }}>{props.texto}</h1>
      {props.children}
    </>
  );
};

const App = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <React.Fragment>
      <Header>Cabeçalho</Header>
      <Modal modal={modal} setModal={setModal} />
      <Trigger setModal={setModal} />
      <Titulo cor="var(--color-dark)" texto="Cadastro">
        <h2>Preencha os campos a seguir:</h2>
      </Titulo>
      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default App;
