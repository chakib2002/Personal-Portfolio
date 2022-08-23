import React from "react";
import ProjectCardForLargeScreen from "./ProjectCardForLargeScreen.js";

export default function ProjectCardsForLargeScreen() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-center"
      className="hidden md:block space-y-16 mt-10"
    >
      <ProjectCardForLargeScreen
        description=" A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
          and more. Available on Visual Studio Marketplace, Package Control,
          Atom  Package Manager, and npm."
        title="The CodeMan shop"
        type="For Production Project"
        tools={["NextJS", "NodeJS", "Express", "Stripe", "MYSQL"]}
        rev={true}
        photo="Hulu1.png"
      />
      <ProjectCardForLargeScreen
        description=" A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
          and more. Available on Visual Studio Marketplace, Package Control,
          Atom  Package Manager, and npm."
        title="The CodeMan shop"
        type="For Production Project"
        tools={["NextJS", "NodeJS", "Express", "Stripe", "MYSQL"]}
        rev={false}
        photo="airbnb.png"
      />
    </div>
  );
}
