"use client";

import { FC, useState } from "react";
import { Modal } from "./Modal";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface PropSkill {
  id: number;
  name: string;
  image: StaticImageData;
  link: string;
  content: string;
}

interface SkillProps {
  skill: PropSkill;
}

export const Skill: FC<SkillProps> = ({ skill }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div
       
        className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        <Image onClick={() => setShowModal(true)} src={skill.image} alt={skill.name} />
        <p className="mt-2">{skill.name}</p>
      </div>

      {/* Modal appears when hovering over skill */}
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <h2 className="text-2xl font-semibold text-primary-color mb-4">
          {skill.name}
        </h2>
        <p className="text-gray-400 mb-4">{skill.content}</p>
        <a
          href={skill.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          Learn more about {skill.name}
        </a>
      </Modal>
    </>
  );
};
