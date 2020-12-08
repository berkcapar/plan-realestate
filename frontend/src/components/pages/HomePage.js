import React from "react";
import HeroArea from "./HeroArea";
import GuideArea from "./GuideArea";
import HighlightedArea from "./HighlightedArea";
import ContactArea from "./ContactArea";

const HomePage = () => {
  return (
    <div>
      <HeroArea />
      <HighlightedArea />
      <GuideArea />
      <ContactArea/>
      
    </div>
  );
};

export default HomePage;
