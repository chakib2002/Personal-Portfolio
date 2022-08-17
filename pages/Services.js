import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ServicesBanner from "../components/ServicePage/ServicesBanner";
import ServiceCards from "../components/ServicePage/ServiceCards";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className=" bg-slate-900">
      <Navbar N_color="text-green-500" />

      <ServicesBanner />
      <ServiceCards />
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
