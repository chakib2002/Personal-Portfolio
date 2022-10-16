import React from "react";
import SecondaryProjectCard from "./SecondaryProjectCard.js";

export default function SecondaryProjectCards() {
  return (
    <div >
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="font-semibold  lg:tracking-widest mt-24 text-white text-2xl text-center "
      >
        Other Noteworthy Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-10 my-10 place-content-stretch">
      
            <SecondaryProjectCard
              title="Hulu landing page clone"
              description="Mobile Responsive clone of Hulu, it fetches data from TMDb API and display it in diffrent categories .Besides, it shows the release date of each movie while hovering over it." 
              tools={["Next js", "Tailwind css", "Responsive css" ]}
              externals={0}
              code='https://github.com/chakib2002/hulu-clone--nextjs-responsive'
              site='https://hulu-clone-ten-zeta.vercel.app/'
            />
          
            <SecondaryProjectCard
              title="Fullstack Session based Authentication"
              description="Session based authentication using passport js with node js and express js on the server side & react js on the client side . "
              tools={['React js', 'node js', 'Express js', 'Passport js', "MySQL", "express-session"]}
              externals={1}
              code='https://github.com/chakib2002/Full-stack-authentication-Node.js-Mysql-React.js'
              site=''
            />
 
     
            <SecondaryProjectCard
              title="Advanced Dashboard"
              description="E-commerce dashboard template that shows statistics of the sales using complicated ui components such as Lines, Areas, Bars & pies."
              tools={["React js", "Tailwind css", "Syncfusion ej2", "Responsive Design"]}
              externals={0}
              code='https://github.com/chakib2002/dashboard-reactjs'
              site='https://dashboard-reactjs.vercel.app/'
            />
   

            <SecondaryProjectCard
              title="Airbnb clone"
              description="A simple and mobile responsive Airbnb clone where users can introduce their vacation dates & location on the search bar and get results for the best houses in the city. "
              tools={["Javascript", "React js", "responsive design"]}
              externals={0}
              code='https://github.com/chakib2002/Airbnb-clone-Next-js-'
              site='https://airbnb-clone-chakib.vercel.app/'
            />
  
    {
      /**
        <SecondaryProjectCard
          title="Spotify2.0"
          description=""
          tools={["Spotify api"]}
        />
       */
    }
            <SecondaryProjectCard
              title="E-store Landing page"
              description="A simple and mobile responsive e-commerce store landing page developed using Next js and Tailwind css."
              tools={["Javascript", "Next js", "tailwind css", "mobile responsive design"]}
              externals={0}
              code='https://github.com/chakib2002/gangster-legacy-frontend-nextjs'
              site='https://gangster-legacy.vercel.app/'
            />
     
      </div>
    </div>
  );
}
