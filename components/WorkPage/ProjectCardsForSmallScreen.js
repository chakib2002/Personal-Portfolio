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
      />
       <ProjectCardForSmallScreen
          description="Mobile Responsive clone of Hulu, it fetches data from TMDb API and display it in diffrent categories .Besides, it shows the release date of each movie while hovering over it."
          title="Hulu landing page clone"
          type="For Portfolio Purposes"
          tools={["Next js", "Tailwind css", "Responsive css" ]}
          photo="Hulu1.png"
      />
      
    </div>
  );
}
