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
  children: PropTypes.any,
  className: PropTypes.string,
};

/**
 * ModalHeader, this is the header of the modal
 * @param {Object} props
 * (className: string) ==> className styles
 * (children: element) ==> childchild element
 * (title: string)     ==> modal title
 * (close: function)   ==> close Modal
 * @returns JSX Element
 */
function ModalHeader({ className, children, title, close }) {
  const Button = () => (
    <button
      onClick={() =>
        close ? close() : console.log('the function close is missing')
      }
      type="button"
      className="btn-close"
    ></button>
  );
  return (
    <header className={className ? className + 'modal-header' : 'modal-header'}>
      {children ? (
        children
      ) : (
        <>
          <h5 className="modal-title">{title ? title : ''}</h5>
          <Button />
        </>
      )}
    </header>
  );
}
ModalHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.string,
  close: PropTypes.func,
};

/**
 * ModalBody, this is the body of the modal
 * (className: string) ==> className styles
 * (children: element) ==> childchild element
 * @param {Object} props
 * @returns JSX Element
 */
function ModalBody({ className, children }) {
  const classModalBody = `modal-body ${className ? className : ''}`;
  return <div className={classModalBody}>{children}</div>;
}
ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export { Modal, ModalHeader, ModalBody };
