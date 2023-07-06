import React from 'react';

const MenuItem = (props) => {
  return (
    <li>
      <a href={props.url}>{props.texto}</a>
    </li>
  );
};

export default MenuItem;
