import React from "react";
import ProjectCardForSmallScreen from "./ProjectCardForSmallScreen.js";

export default function ProjectCardsForSmallScreen() {
  return (
    <div className="space-y-5">
      <ProjectCardForSmallScreen
        type="For Production Project"
        title="The CodeMan shop"
        description=" A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm."
        tools={["NextJS", "NodeJS", "Express", "Stripe", "MYSQL"]}
        photo="airbnb.png"
      />
      <ProjectCardForSmallScreen
        description=" A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
       and more. Available on Visual Studio Marketplace, Package Control,
       Atom  Package Manager, and npm."
        title="The CodeMan shop"
        type="For Production Project"
        tools={["NextJS", "NodeJS", "Express", "Stripe", "MYSQL"]}
        photo="Hulu1.png"
      />
    </div>
  );
}
