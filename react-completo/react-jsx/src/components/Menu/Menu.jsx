import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <nav>
      <ul>
        <MenuItem url="/" texto="Página inicial" />
        <MenuItem url="/produtos.html" texto="Produtos" />
      </ul>
    </nav>
  );
};

export default Menu;
