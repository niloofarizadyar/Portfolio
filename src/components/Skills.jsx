import React from "react";
import { ItemSkill } from "../containers";
import { skills } from "../assets/Contents";

const Skills = () => {
  return (
    <div id="skills" className="bg-oddBgColor p-3 py-[40px]">
      <p className="font-bold text-[30px] text-lightRoseBrown pb-3 text-center">
        Skills
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((item) => (
          <ItemSkill
            skill={item.title}
            percentage={item.percentage}
            key={item.id}
            image={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
