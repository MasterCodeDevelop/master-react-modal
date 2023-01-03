import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';

/**
 * Modal, this is modal container.
 * @param {JSON} props
 * (isOpen: boolean) ==> modal state to show or not
 * (close: function) ==> close Modal
 * @returns JSX Element
 */
function Modal({ isOpen, close }) {
  const classModal = `modal ${isOpen ? 'isOpen' : ''}`;
  return (
    <div className={classModal}>
      <div className="modal-content">Modal Content</div>
      <div onClick={() => close()} className="modal-close"></div>
    </div>
  );
}
Modal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
};

export { Modal };
