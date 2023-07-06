import React from 'react';

const Trigger = ({ setModal, ...props }) => {
  return (
    <button
      className="trigger"
      aria-label="Abrir modal"
      onClick={() => setModal(true)}
      {...props}
    >
      ☰
    </button>
  );
};

export default Trigger;
