import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';

/**
 *
 * @param {JSON} props
 * isOpen: boolean
 *
 * @returns JSX
 */
function Modal({ isOpen }) {
  return <div>Modal {isOpen ? 'isOpen' : 'isClose'} </div>;
}
Modal.propTypes = {
  isOpen: PropTypes.bool,
};

export { Modal };
