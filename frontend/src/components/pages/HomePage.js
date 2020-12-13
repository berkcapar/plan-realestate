import React from "react";
import HeroArea from "./HeroArea";
import GuideArea from "./GuideArea";
import HighlightedArea from "./HighlightedArea";
import ContactArea from "./ContactArea";
import WhyPlanEmlakArea from "./WhyPlanEmlakArea";
import { whyItems } from "../WhyItems";

const HomePage = () => {
  return (
    <div>
      <HeroArea />
      <HighlightedArea />
      <GuideArea />
      <WhyPlanEmlakArea whyItems={whyItems}/>
      <ContactArea/>
      
    </div>
  );
};

export default HomePage;
