import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';
import Trigger from './Modal/Trigger';
import Modal from './Modal/Modal';
import ButtonToggleForm from './Form/ButtonToggleForm';

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
  const [ativo, setAtivo] = React.useState(false);
  return (
    <React.Fragment>
      <Header addBotao={false} />
      <Modal modal={modal} setModal={setModal} />
      <Trigger setModal={setModal} />
      <Titulo cor="var(--color-dark)" texto="Cadastro"></Titulo>
      <ButtonToggleForm onClick={() => setAtivo(!ativo)}>
        Clique aqui para acessar o formulário
      </ButtonToggleForm>
      {ativo && <Form />}
      <Footer addBotao={false} />
    </React.Fragment>
  );
};

export default App;
