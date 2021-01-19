import React from "react";
import { purchaseDropdownItems } from "../DropdownItems";

const SaleOption = () => {
  return (
    <>
      <h3 className="dropdown-first-text">Sale Option</h3>
      <select className="sale-dropdown">
        {purchaseDropdownItems.map((option) => (
          <option name="option" value={option.purchaseoption}>
            {option.purchaseoption}
          </option>
        ))}
      </select>
    </>
  );
};

export default SaleOption;
