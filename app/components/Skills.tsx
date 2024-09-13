"use client"

import { skillList } from "./SkillsList";
import { Skill } from "./Skill";

export const Skills= () => {
  return (
    <div className="border border-gray-600 bg-black-300 text-gray-400 md:h-[200px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
      <div className="flex flex-col">
      <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
       My Tech <br/> Stack
      </h2>
      </div>
      {skillList.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </div>
  );
};