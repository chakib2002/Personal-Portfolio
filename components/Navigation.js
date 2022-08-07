import React from "react";
import About from "./Branches/About";
import Experience from "./Branches/Experience";
import Services from "./Branches/Services";
import Work from "./Branches/Work";
import Education from "./Branches/Education";
import Contact from "./Branches/Contact";
import Skills from "./Branches/Skills";

export default function Navigation() {
  return (
    <div className="mx-10 my-16">
      <div className="lg:grid lg:grid-cols-2 lg:space-x-10 ">
        <div>
          <About />
        </div>
        <div className="">
          <div className="lg:grid lg:grid-flow-col lg:space-x-5 ">
            <Experience />
            <Work />
          </div>
          <Services />
        </div>
      </div>
      <div className="lg:grid lg:grid-flow-col lg:space-x-10 lg:my-5 ">
        <Contact />
        <div className="lg:grid lg:grid-flow-col lg:space-x-5 ">
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  );
}
