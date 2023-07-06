import React from 'react';
import Menu from './components/Menu/Menu';
import Home from './Home';
import Produtos from './Produtos';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const { pathname } = window.location;
  if (pathname === '/produtos.html') {
    return (
      <>
        <Menu />
        <Produtos />
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
