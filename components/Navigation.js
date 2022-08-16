import React from "react";
import About from "./Navigation/About";
import Experience from "./Navigation/Experience";
import Services from "./Navigation/Services";
import Work from "./Navigation/Work";
import Skills from "./Navigation/Skills";

export default function Navigation() {
  return (
    <div className="mx-10 my-16">
      <div className="lg:grid lg:grid-cols-2 lg:space-x-5 ">
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
