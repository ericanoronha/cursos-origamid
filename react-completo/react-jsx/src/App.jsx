import React from 'react';
import Menu from './components/Menu/Menu';
import Home from './Home';
import Produtos from './Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
// <Produtos lista={produtos} />

const App = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  const { pathname } = window.location;
  console.log(pathname);
  if (pathname === '/produtos.html') {
    return (
      <>
        <Menu />
        <Produtos lista={produtos} />
      </>
    );
  } else {
    return (
      <>
        <Menu />
        <Home />
      </>
    );
  }
};

export default App;
