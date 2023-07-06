import React from 'react';
const Header = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    document.title = 'Clicou ' + contar + ' vezes';
  }, [contar]);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <header
      style={{
        background: 'lightgray',
        textAlign: 'center',
        padding: '0.25rem',
      }}
    >
      Cabeçalho
      {/* <button
        onClick={() => {
          setContar(contar + 1);
        }}
      >
        {contar}
      </button>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )} */}
    </header>
  );
};

export default Header;
