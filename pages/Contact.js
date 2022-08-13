import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/ContactPage/Header";
import Section from "../components/ContactPage/Section";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-slate-900">
      <Navbar N_color="text-yellow-500" />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}
