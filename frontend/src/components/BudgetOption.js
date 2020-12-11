import React from "react";
import {priceDropdownItems} from './DropdownItems'

const BudgetOption = () => {
  return (
   <div>
     <h3>Budget</h3>
     <select className="budget-dropdown">{priceDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select>
     <select className="budget-dropdown">{priceDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select>
   </div>
  );
};

export default BudgetOption
