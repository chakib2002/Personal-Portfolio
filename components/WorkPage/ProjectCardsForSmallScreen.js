import React from "react";
import ProjectCardForSmallScreen from "./ProjectCardForSmallScreen.js";

export default function ProjectCardsForSmallScreen() {
  return (
    <div>
      <ProjectCardForSmallScreen
        type="For Production Project"
        title="The CodeMan shop"
        description=" A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm."
        tools={["NextJS", "NodeJS", "Express", "Stripe", "MYSQL"]}
        photo="airbnb.png"
      />
    </div>
  );
}
