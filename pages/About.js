import React from "react";

import Section from "../components/AboutPage/Section";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import History from "../components/AboutPage/History";

export default function About() {
  return (
    <div className="bg-slate-900">
      <Navbar N_color="text-green-500" />
      <Header
        title="I am an international web developer freelancer based in Algeria."
        question="Who I am"
      />
      <Section />
      <History />
      <Footer />
    </div>
  );
}
