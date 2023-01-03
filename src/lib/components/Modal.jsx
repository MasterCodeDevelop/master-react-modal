import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';

/**
 * Modal, this is modal container.
 * @param {Object} props
 * (isOpen: boolean)   ==> modal state to show or not
 * (close: function)   ==> close Modal
 * (children: element) ==> childchild element
 * (className: string) ==> className styles
 * @returns JSX Element
 */
function Modal({ isOpen, close, children, className }) {
  const classModal = `modal ${isOpen ? 'isOpen' : ''} ${
    className ? className : ''
  } `;
  return (
    <div className={classModal}>
      <div className="modal-content">{children}</div>
      <div onClick={() => close()} className="modal-close"></div>
    </div>
  );
}
Modal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.element,
  className: PropTypes.string,
};

/**
 * ModalHeader, this is the header of the modal
 * @param {Object} props
 * @returns JSX Element
 */
function ModalHeader({ className }) {
  return (
    <header className={className ? className + 'modal-header' : 'modal-header'}>
      Header
    </header>
  );
}
ModalHeader.propTypes = {
  className: PropTypes.string,
};

export { Modal, ModalHeader };
