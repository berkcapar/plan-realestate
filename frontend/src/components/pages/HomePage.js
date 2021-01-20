import React from "react";
import HeroArea from "./HeroArea";
import GuideArea from "./GuideArea/GuideArea";
import HighlightedArea from "../pages/HighlightedArea/HighlightedArea";
import ContactArea from "./ContactArea";
import WhyPlanEmlakArea from "./WhyPlanEmlakArea";
import { whyItems } from "../WhyUs/WhyItems";

const HomePage = () => {
  return (
    <div>
      <HeroArea />
      <HighlightedArea />
      <GuideArea />
      <WhyPlanEmlakArea whyItems={whyItems} />
      <ContactArea />
    </div>
  );
};

export default HomePage;
