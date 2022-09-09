import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/SkillsPage/Section";
import Footer from '../components/Footer'

export default function Skills() {
  return (
    <div className="bg-slate-900 ">
      <Navbar N_color="text-green-500" />
      <Header
        title="A well-rounded developer who possesses both technical abilities and soft skills will be crucial for the future of work."
        question="My Skills"
      />
      <Section />
      <Footer />
    </div>
  );
}
