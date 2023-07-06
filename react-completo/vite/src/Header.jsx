import React from 'react';
const Header = () => {
  const [contar, setContar] = React.useState(0);
  React.useEffect(() => {
    console.log('Clicou');
  }, []);
  React.useEffect(() => {
    document.title = 'Clicou ' + contar + ' vezes';
  }, [contar]);
  return (
    <header
      style={{
        background: 'lightgray',
        textAlign: 'center',
        padding: '0.25rem',
      }}
    >
      <button
        onClick={() => {
          setContar(contar + 1);
        }}
      >
        {contar}
      </button>
    </header>
  );
};

export default Header;
