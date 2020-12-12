import React from "react";
import {sizeDropdownItems} from './DropdownItems'

const SizeOption = () => {
  return <div>
    <h3 className="dropdown-second-text">Size </h3>
    <select className="size-dropdown">{sizeDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select>
    <select className="size-dropdown">{sizeDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select>
  </div>;
};

export default SizeOption;
