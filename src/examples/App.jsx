import React, { useState } from 'react';
import { Modal } from '../lib/index';
import './App.scss';

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="app">
      <button className="btn btn-primary" onClick={() => setOpenModal(true)}>
        Show Modal
      </button>
      <Modal isOpen={openModal} />
    </div>
  );
}
