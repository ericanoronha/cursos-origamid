import React from 'react';
import Titulo from './components/Titulo';

const Produto = ({ dados }) => {
  return (
    <div className="produto">
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <div className="produto-imagem">
        <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
      </div>
    </div>
  );
};

const Produtos = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <Titulo texto="Produtos" />
      <div className="container">
        <button onClick={handleClick}>Smartphone</button>
        <button onClick={handleClick}>Tablet</button>
        <button onClick={handleClick}>Notebook</button>
      </div>

      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};

export default Produtos;
