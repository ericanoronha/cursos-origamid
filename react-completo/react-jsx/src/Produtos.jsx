import React from 'react';
import Titulo from './components/Titulo';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  if (dados === null) return null;
  return (
    <div>
      <h3>{dados.nome}</h3>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

const Produtos = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <Titulo texto="Produtos" />
      {window.localStorage.produto !== 'null' && (
        <h2>
          Visto recentemente{' '}
          <span>{window.localStorage.getItem('produto')}</span>
        </h2>
      )}

      <div className="container">
        <button onClick={handleClick}>Smartphone</button>
        <button onClick={handleClick}>Tablet</button>
        <button onClick={handleClick}>Notebook</button>
      </div>
      <Produto produto={produto} />
    </>
  );
};

export default Produtos;
