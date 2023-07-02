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
        description="Managili is an e-commerce platform, similar to Shopify, that provides a comprehensive suite of tools to create and manage online stores with ease. And it's integrated with the largest delivery companies in Algeria and stripe payment gateway."
        title="Managili"
        type="Company"
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
        ]}
        rev={true}
        photo="managili.png"
        color="text-green-500"
        bg={"bg-green-700"}
        externals={2}
        code="https://managili-xi.vercel.app/"
      />
      <ProjectCardForLargeScreen
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
        rev={false}
        photo="aiutami.png"
        color="text-green-500"
        bg="bg-green-700"
        externals={1}
        code={"https://github.com/chakib2002/aiutami-backend-node-js"}
      />
      <ProjectCardForLargeScreen
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
        color="text-green-500"
        bg="bg-green-700"
        externals={1}
        code="https://github.com/chakib2002/Delivery-project-Backend-.git"
      />
    </div>
  );
}
