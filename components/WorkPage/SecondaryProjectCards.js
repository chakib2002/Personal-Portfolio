import React from "react";
import SecondaryProjectCard from "./SecondaryProjectCard.js";

export default function SecondaryProjectCards() {
  return (
    <div>
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="font-semibold  lg:tracking-widest mt-24 text-white text-2xl text-center "
      >
        Other Noteworthy Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-10 my-10">
        <SecondaryProjectCard
          title="E-commerce shop dashboard"
          description="It means that somewhere in your code, you are calling a function which in turn calls another function and so forth, until you hit the call stack limit."
          tools={["Javascript", "Express", "ReactJS", "NodeJs", "MySQL"]}
        />
        <SecondaryProjectCard
          title="Spotify clone2.0"
          description="It means that somewhere in your code, you are calling a function which in turn calls another function and so forth, until you hit the call stack limit."
          tools={["Javascript", "Express", "ReactJS", "NodeJs", "MySQL"]}
        />
        <SecondaryProjectCard
          title="Airbnb clone"
          description="It means that somewhere in your code, you are calling a function which in turn calls another function and so forth, until you hit the call stack limit."
          tools={["Javascript", "Express", "ReactJS", "NodeJs", "MySQL"]}
        />
        <SecondaryProjectCard
          title="Hulu clone"
          description="It means that somewhere in your code, you are calling a function which in turn calls another function and so forth, until you hit the call stack limit."
          tools={["Javascript", "Express", "ReactJS", "NodeJs", "MySQL"]}
        />
        <SecondaryProjectCard
          title="Back end of a transportation platform"
          description="It means that somewhere in your code, you are calling a function which in turn calls another function and so forth, until you hit the call stack limit."
          tools={["Javascript", "Express", "ReactJS", "NodeJs", "MySQL"]}
        />
        <SecondaryProjectCard
          title="Full stack Authentication"
          description="It means that somewhere in your code, you are calling a function which in turn calls another function and so forth, until you hit the call stack limit."
          tools={["Javascript", "Express", "ReactJS", "NodeJs", "MySQL"]}
        />
      </div>
    </div>
  );
}
