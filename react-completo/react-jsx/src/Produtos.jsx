import React from 'react';
import Titulo from './components/Titulo';

const Produto = (props) => {
  const listaPropriedades = new Array();
  props.listagem.map((item) => listaPropriedades.push(item));
  return (
    <div {...props}>
      <p>{props.nome}</p>
      <Lista aria-label="Listagem de produtos" total={listaPropriedades} />
    </div>
  );
};

const Lista = (props) => {
  const total = props.total;
  return (
    <>
      <ul {...props}>
        {total.map((i) => (
          <Item key={i}>{i}</Item>
        ))}
      </ul>
    </>
  );
};

const Item = (props) => {
  return <li key={props.id}>{props.children}</li>;
};

const Produtos = ({ ...props }) => {
  const produtos = props.lista;

  return (
    <>
      <Titulo texto="Produtos" />
      {produtos.map((item) => (
        <Produto
          className="produto"
          key={item.nome}
          data-key={item.nome}
          nome={item.nome}
          listagem={item.propriedades}
        />
      ))}
    </>
  );
};

export default Produtos;
