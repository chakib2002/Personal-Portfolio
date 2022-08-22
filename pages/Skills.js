import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Carrousel from "../components/SkillsPage/Carrousel";

export default function Skills() {
  return (
    <div className="bg-slate-900 h-[1900px]">
      <Navbar N_color="text-green-500" />
      <Header
        title="A well-rounded developer who possesses both technical abilities and soft skills will be crucial for the future of work."
        question="My Skills"
      />
      <Carrousel />
    </div>
  );
}
