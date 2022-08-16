import React from "react";

import Section from "../components/AboutPage/Section";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="bg-slate-900">
      <Navbar N_color="text-green-500" />
      <Header title="Learn more about me" number="1" />
      <Section />
      <Footer />
    </div>
  );
}
