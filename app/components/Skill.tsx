"use client"

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
  
  export const Skill:FC<SkillProps> = ({ skill }) => {
    const [activeSkill, setActiveSkill] = useState<PropSkill | null>(null);
  
    return (
      <>
        <div
          key={skill.id}
          onMouseEnter={() => setActiveSkill(skill)}
          onMouseLeave={() => setActiveSkill(null)}
          className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform duration-300 hover:scale-105 cursor-pointer "
        >
          <Image src={skill.image} alt={skill.name} className="z-0" />
          <p className="mt-2 z-0">{skill.name}</p>
          {activeSkill?.id === skill.id && (
            <Modal skill={skill} closeModal={() => setActiveSkill(null)} />
          )}
        </div>
      </>
    );
  };