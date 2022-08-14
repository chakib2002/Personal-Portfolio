import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/WorkPage/Header";
import ProjectCardsForLargeScreen from "../components/WorkPage/ProjectCardsForLargeScreen";
import ProjectCardsForSmallScreen from "../components/WorkPage/ProjectCardsForSmallScreen";
import SecondaryProjectCards from "../components/WorkPage/SecondaryProjectCards";
import ShowMoreButton from "../components/WorkPage/ShowMoreButton";
import Footer from "../components/Footer";
export default function work() {
  return (
    <div className="bg-slate-900">
      <Navbar N_color="text-green-500" />
      <Header />
      <ProjectCardsForLargeScreen />
      <ProjectCardsForSmallScreen />
      <SecondaryProjectCards />
      <ShowMoreButton />
      <Footer />
    </div>
  );
}
