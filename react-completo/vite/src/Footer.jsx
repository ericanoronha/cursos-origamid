import React from 'react';
const Footer = (props) => {
  const [items, setItems] = React.useState(['Item 1', 'Item 2']);

  function handleClick() {
    // Errado. Modifique o estado apenas com a função de atualização (setItems)
    items.push('Novo Item');
  }

  function handleClickReativo() {
    // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
    setItems([...items, 'Novo Item']);
  }
  return (
    <footer
      style={{ background: 'gray', textAlign: 'center', padding: '0.25rem' }}
    >
      <div>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        <button style={{ marginRight: '2rem' }} onClick={handleClick}>
          Adicionar Item
        </button>
        <button onClick={handleClickReativo}>Adicionar Reativo</button>
      </div>
    </footer>
  );
};

export default Footer;
