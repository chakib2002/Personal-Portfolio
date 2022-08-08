import React from "react";
import About from "./Branches/About";
import Experience from "./Branches/Experience";
import Services from "./Branches/Services";
import Work from "./Branches/Work";
import Skills from "./Branches/Skills";

export default function Navigation() {
  return (
    <div className="mx-10 my-16">
      <div className="lg:grid lg:grid-cols-2 lg:space-x-10 ">
        <div className="space-y-5">
          <About />
          <Skills />
        </div>
        <div className="">
          <div className="lg:grid lg:grid-flow-col lg:space-x-5 ">
            <Experience />
            <Work />
          </div>
          <Services />
        </div>
      </div>
    </div>
  );
}
