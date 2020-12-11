import React from "react";
import {homeDropdownItems} from './DropdownItems'

const HomeOption = () => {
  return (
  <div>
    <h3>Choose Property</h3>
    <select className="property-drowdown">{homeDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select>
  </div>
  );
};

export default HomeOption;
