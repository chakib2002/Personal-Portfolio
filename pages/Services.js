import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import ServiceCards from "../components/ServicePage/ServiceCards";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className=" bg-slate-900">
      <Navbar N_color="text-green-500" />

      <Header
        title="I provide clients with stunning solutions, developed with skill &
        passion."
        question="What I do !"
      />
      <ServiceCards />
      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
}
