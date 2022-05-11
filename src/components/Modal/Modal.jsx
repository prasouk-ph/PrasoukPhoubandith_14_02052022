import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


function Modal({ isActive, onClose, message }) {
  function closeModalWithKeyboard(event) {
    if (event.key === "Escape") {
      document.body.removeEventListener('keydown', closeModalWithKeyboard)
      onClose()
    }
  }


  function addEventListener() {
    document.body.addEventListener('keydown', closeModalWithKeyboard)
  }

  useEffect(() => {
    addEventListener()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive])

  if (!isActive) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={event => event.stopPropagation()}> {/* prevent modal closing when click on modal content */}
        <div className="modal-body">
          <p>{message}</p>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="modal-button-close" name="close">Close</button>
        </div> 
      </div>
    </div>,
    // replace by "document.body" to write test
    // document.querySelector("#root")
    document.body
  );
}
export default Modal;
