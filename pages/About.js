import React from "react";
import Header from "../components/AboutPage/Header";
import Section from "../components/AboutPage/Section";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="bg-slate-900">
      <Navbar N_color="text-green-500" />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}
