import React from 'react';



interface ModalProps {
  children: React.ReactNode;
}
  
const Modal: React.FC<ModalProps> = ({ 
  children , 
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="p-8 bg-white  rounded-lg shadow-lg w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default Modal;
