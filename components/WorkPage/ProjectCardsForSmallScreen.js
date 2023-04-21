import React from "react";
import ProjectCardForSmallScreen from "./ProjectCardForSmallScreen.js";

export default function ProjectCardsForSmallScreen() {
  return (
    <div className="space-y-5">
      <ProjectCardForSmallScreen
        description="Managili is a platform that offers e-commercers the ability to generate landing pages for each of their products with ease, And effortlessly manage and monitor their orders. Besides, the platform is synchronized with multiple delivery companies ."
        title="Managili"
        type="For Production Purposes & in progress"
        tools={[
          "TypeScript",
          "NextJS",
          "MySQL",
          "Prisma",
          "trcp",
          "WebSockets",
          "stripe payment Inegration",
          "AWS",
          "Facebook pixel",
          "Google oauth",
          "third party api integration",
          "Delivery companies synchronization",
        ]}
        photo="Managili.png"
      />
      <ProjectCardForSmallScreen
        description="Aiutami is a platform that helps Individual Housekeepers, Tutors and Senior caregivers connects with clients and get hired ."
        title="Aiutami"
        type="For Portfolio Purposes"
        tools={[
          "JavaScript",
          "React JS",
          "Node js",
          "Express js",
          "MySQL",
          "Sequelize",
          "Redis",
        ]}
        photo="aiutami.png"
        externals={1}
        code="https://github.com/chakib2002/aiutami-backend-node-js"
      />
      <ProjectCardForSmallScreen
        description="Backend code of a platform that connects Individual transporters with clients in need for a package transportation ."
        title="Delivery Project"
        type="For Portfolio Purposes"
        tools={[
          "Node js",
          "Express js",
          "MySQL",
          "Restfull API",
          "Authentication",
          "Authorization",
          "Types Validation",
        ]}
        rev={true}
        photo="deliveryProject.png"
        externals={1}
        code="https://github.com/chakib2002/Delivery-project-Backend-.git"
      />
    </div>
  );
}
