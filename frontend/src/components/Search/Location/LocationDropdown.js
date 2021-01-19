import React from "react";
import { locationDropdownItems } from "../DropdownItems";

const LocationDropdown = () => {
  return (
    <>
      <h3 className="dropdown-first-text"> Pick a location</h3>
      <select className="location-dropdown">
        {locationDropdownItems.map((option) => (
          <option value={option.location}>{option.location}</option>
        ))}
      </select>
    </>
  );
};

export default LocationDropdown;
