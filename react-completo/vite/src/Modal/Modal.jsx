import React from 'react';

const Modal = ({ modal, setModal, ...props }) => {
  if (modal === true) {
    return (
      <dialog id="dialog" open={modal}>
        <button
          className="trigger"
          aria-controls="dialog"
          aria-label="Fechar modal"
          onClick={() => setModal(false)}
          {...props}
        >
          ⤬
        </button>
        <p>
          <strong>Leia os termos de serviço</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum atque
          repudiandae assumenda tempore esse omnis dolor similique possimus
          veritatis nobis? Ut deleniti ab dolor molestiae expedita, non officia
          in numquam.
        </p>
        <p>
          Adipisci error reprehenderit beatae nemo. Cupiditate, obcaecati!
          Consectetur, adipisicing elit. Doloribus, sed libero, voluptatum
          cupiditate, asperiores enim consectetur a odio autem ipsum ex? Libero,
          aspernatur!{' '}
        </p>
      </dialog>
    );
  }
  return null;
};

export default Modal;
