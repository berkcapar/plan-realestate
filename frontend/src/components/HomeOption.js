import React from "react";
import { homeDropdownItems } from "./DropdownItems";

const HomeOption = () => {
  return (
    <div>
      <h3 className="dropdown-first-text">Choose Property</h3>
      <select className="property-drowdown">
        {homeDropdownItems.map((option) => (
          <option value={option.homeoption}>{option.homeoption}</option>
        ))}
      </select>
    </div>
  );
};

export default HomeOption;
