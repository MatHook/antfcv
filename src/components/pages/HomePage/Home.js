import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjFour, homeObjThree, homeObjTwo, homeObjOne } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
