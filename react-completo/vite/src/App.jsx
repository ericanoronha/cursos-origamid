import React from 'react';
const App = () => {
  function handleClick(event) {
    console.log(event.target);
    console.log(event.target.innerHTML);

    event.target.innerHTML === 'Clicou'
      ? (event.target.innerHTML = 'Clicou de novo')
      : (event.target.innerHTML = 'Clicou');
  }
  return <button onClick={handleClick}>Clique</button>;
};

export default App;
