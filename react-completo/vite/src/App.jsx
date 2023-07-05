import React from 'react';
const App = () => {
  function handleClick(event) {
    console.log(event.target);
    console.log(event.target.innerHTML);

    event.target.innerHTML === 'Clicou'
      ? (event.target.innerHTML = 'Clicou de novo')
      : (event.target.innerHTML = 'Clicou');
  }
  function handleScroll(e) {
    console.log(e);
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <div
      style={{
        height: '800px',
      }}
    >
      <button onClick={handleClick}>Clique</button>
    </div>
  );
};

export default App;
