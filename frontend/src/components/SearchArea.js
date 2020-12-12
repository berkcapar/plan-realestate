import React, { useState } from "react";
import BudgetOption from "./BudgetOption";
import HomeOption from "./HomeOption";
import LocationDropdown from "./LocationDropdown";
import RoomOption from "./RoomOption";
import SaleOption from "./SaleOption";
import SizeOption from "./SizeOption";
import Toggleable from "./Toggleable";

const SearchArea = () => {

  return (
    <div className= "searchformarea">
      <h3 className="searchformareatitle">Find Your Cozy Place</h3>
      <form className="searchform">
        <div className="searchform-first">
          <div className="searchform-sale-location-home">
        <div className="all-options">
          <SaleOption />
        </div>
        <div className="all-options">
          <LocationDropdown />
        </div>
        <div className="all-options">
          <HomeOption />
        </div>
        </div>
        <div className="all-options">
          <BudgetOption />
        </div>
        <button className="searchbutton" type="submit">SEARCH </button>
        </div>
        <div className="searchform-second"> 
        <RoomOption />
        <SizeOption />
        </div>
      </form>
    </div>
  );
};

export default SearchArea;
