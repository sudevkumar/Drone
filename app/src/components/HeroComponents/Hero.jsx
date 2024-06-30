import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="flex bg-gradient-to-r from-[#020615] from-10% via-[#060D27] via-30% to-[#0A1237] to-90% h-[120vh]">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default Hero;
