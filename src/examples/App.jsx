import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from '../lib/index';
import './App.scss';

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);

  return (
    <div className="app">
      <button className="btn btn-primary" onClick={() => setOpenModal(true)}>
        Show Modal
      </button>
      <Modal isOpen={openModal} className="modal-cadetblue" close={closeModal}>
        <ModalHeader title="Header" close={closeModal} />
        <ModalBody>
          Hello this my modal
          <br />
          <br />
          <a href="https://github.com/MasterCodeDevelop">MasterCodeDevelop</a>
        </ModalBody>
      </Modal>
    </div>
  );
}
