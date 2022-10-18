import React from "react";
import ProjectCardForSmallScreen from "./ProjectCardForSmallScreen.js";

export default function ProjectCardsForSmallScreen() {
  return (
    <div className="space-y-5">
      <ProjectCardForSmallScreen
        description="Managili is a platform that helps E-commercers create web pages for their products and host them online, also it manages their orders and sells automatically from a dashboard ."
        title="Managili"
        type="For Production Purposes"
        tools={["TypeScript", "NextJS", "MySQL", "Prisma", "trcp", "WebSockets"]}
        photo="Managili.png"
      />
      <ProjectCardForSmallScreen
           description="Aiutami is a platform that helps Individual Housekeepers, Tutors and Senior caregivers connects with clients and get hired ."
           title="Aiutami"
           type="For Portfolio Purposes"
           tools={["JavaScript", "React JS", "Node js", "Express js", "MySQL", "Sequelize","Redis" ]}
           photo="aiutami.png"
           externals={1}
           code='https://github.com/chakib2002/aiutami-backend-node-js'
      />
       <ProjectCardForSmallScreen
           description="Backend code of a platform that connects Individual transporters with clients in need for a package transportation ."
           title="Delivery Project"
           type="For Portfolio Purposes"
           tools={[ "Node js", "Express js", "MySQL", "Restfull API", "Authentication", "Authorization", "Types Validation"]}          rev={true}
           photo="deliveryProject.png"
           externals={1}
           code='https://github.com/chakib2002/Delivery-project-Backend-.git'
      />
      
    </div>
  );
}
