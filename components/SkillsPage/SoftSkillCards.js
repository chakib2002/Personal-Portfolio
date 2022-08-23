import React from "react";
import SoftSkillCard from "./SoftSkillCard";

export default function SoftSkillCards() {
  return (
    <div className=" grid grid-flow-col overflow-x-auto scrollbar-hide scroll-pl-10 snap-x ">
      <SoftSkillCard
        skill="Team Work"
        story=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident
        mollitia quaerat molestiae ducimus vel quo voluptatibus odio minima
        illum."
        image="/Teamwork.png"
        stars={5}
      />
      <SoftSkillCard
        skill="Communication"
        story=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident
        mollitia quaerat molestiae ducimus vel quo voluptatibus odio minima
        illum."
        image="/Communication.png"
        stars={5}
      />
      <SoftSkillCard
        skill="Problem Solving"
        story=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident
        mollitia quaerat molestiae ducimus vel quo voluptatibus odio minima
        illum."
        image="/Problemsolving.png"
        stars={5}
      />
      <SoftSkillCard
        skill="Open Mindedness"
        story=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident
        mollitia quaerat molestiae ducimus vel quo voluptatibus odio minima
        illum."
        image="/OpenMindedness.png"
        stars={5}
      />

      <SoftSkillCard
        skill="Engagement"
        story=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident
        mollitia quaerat molestiae ducimus vel quo voluptatibus odio minima
        illum."
        image="/Engagement.png"
        stars={5}
      />
      {/** ---------------------------------------- */}
    </div>
  );
}
