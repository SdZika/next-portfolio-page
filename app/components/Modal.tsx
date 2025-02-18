"use client";
import { FC, useEffect } from "react";
import ReactDOM from 'react-dom';


interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
  showModal: boolean;
}

export const Modal: FC<ModalProps> = ({ children, closeModal, showModal }) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  if (!showModal) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal} // Click outside to close modal
    >
      <div
        className="relative bg-[#161616] p-6 rounded-xl shadow-md max-w-md sm:max-w-lg lg:max-w-xl max-h-[80vh] overflow-y-auto transform transition-transform duration-300 hover:scale-105"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        {children}
        <button
          className="mt-2 px-4 py-2 bg-primary-color text-white rounded hover:bg-red-600"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};
