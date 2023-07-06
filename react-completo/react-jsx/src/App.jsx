import React from 'react';
import Menu from './components/Menu/Menu';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  const { pathname } = window.location;

  return (
    <>
      <Menu />
      {pathname === '/produtos.html' ? <Produtos /> : <Home />}
    </>
  );
};

export default App;
