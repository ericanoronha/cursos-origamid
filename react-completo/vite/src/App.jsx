import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const App = () => {
  return (
    <Fragment>
      <Header />
      <p>Olá!</p>
      <Form />
      <Footer />
    </Fragment>
  );
};

export default App;
