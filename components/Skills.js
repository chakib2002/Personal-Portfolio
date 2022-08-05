import React from "react";
import Skill from "./skill";

export default function Skills({ skills, showSkills }) {
  return (
    <div
      className={`${
        !showSkills
          ? "opacity-0 -translate-y-[600px] md:-translate-y-[250px]"
          : "opacity-100"
      } inline-block mx-10 space-x-5 mt-5 scrollbar-hide transition duration-700`}
    >
      {skills?.map((skill, index) => (
        <Skill text={skill} key={index} />
      ))}
    </div>
  );
}
