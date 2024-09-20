"use client"
import { FC } from "react";

interface ModalProps {
    skill: {
      name: string;
      content: string;
      link: string;
    };
    closeModal: () => void;
  }
  
  export const Modal: FC<ModalProps> = ({ skill, closeModal }) => {
    
    return (
      <div className="bg-black flex justify-center items-center w-[400px]">
        <div 
            className="mt-10 flex flex-col gap-5  bg-[#161616] p-6 rounded-xl shadow-md max-w-md sm:max-w-lg lg:max-w-xl max-h-[80vh] overflow-y-auto transform transition-transform duration-300 hover:scale-105"
        >
          <h2 className="text-2xl font-semibold text-primary-color mb-4">
            {skill.name}
          </h2>
          <p className="text-gray-400 mb-4">
            This is the modal content for {skill.content}
          </p>
          <a
            href={skill.link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            Learn more about {skill.name}
          </a>
          <button
            className="mt-2 px-4 py-2 bg-primary-color text-white rounded hover:bg-red-600"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    );
  };