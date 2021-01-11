import React from "react";
import { minpriceDropdownItems, maxpriceDropdownItems } from "./DropdownItems";

const BudgetOption = () => {
  return (
    <div className="budget-option">
      <h3 className="dropdown-first-text">Budget</h3>
      <select className="budget-dropdown">
        {minpriceDropdownItems.map((option) => (
          <option value={option.minpriceoption}>{option.minpriceoption}</option>
        ))}
      </select>
      <select className="budget-dropdown">
        {maxpriceDropdownItems.map((option) => (
          <option value={option.maxpriceoption}>{option.maxpriceoption}</option>
        ))}
      </select>
    </div>
  );
};

export default BudgetOption;
