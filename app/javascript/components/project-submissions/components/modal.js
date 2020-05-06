import React from 'react';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'react-modal' : 'react-modal--hidden'

  return (
    <div className={showHideClassName}>
      <div className='react-modal__body'>
        { children }
      </div>
    </div>
  )
}

export default Modal
