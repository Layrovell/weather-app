/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Modal.scss';

export const Modal = ({ setModalActive, children }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    className="modalw"
    onClick={() => {
      setModalActive(false);
    }}
  >
    <div className="modal__content">
      {children}
      <div className="has-text-centered mt-2">
        <button
          onClick={() => {
            setModalActive(false);
          }}
          type="button"
          className="button is-success is-small"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);
