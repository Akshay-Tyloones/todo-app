import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        {children}
        <button onClick={handleClose} className="mt-4 ml-4 p-2 bg-red-500 text-white">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
