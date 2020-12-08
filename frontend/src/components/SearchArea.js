import React from "react";
import BudgetOption from "./BudgetOption";
import HomeOption from "./HomeOption";
import LocationOption from "./LocationOption";
import RoomOption from "./RoomOption";
import SaleOption from "./SaleOption";
import SizeOption from "./SizeOption";
import Toggleable from "./Toggleable";

const SearchArea = () => {
  return (
    <div className="searchformarea">
      <h3 className="searchformareatitle">Find Your Cozy Place</h3>
      <form className="searchform">
        <div>
          <SaleOption />
        </div>
        <div>
          <LocationOption />
        </div>
        <div>
          <HomeOption />
        </div>
        <div>
          <BudgetOption />
        </div>

        <button className="searchbutton" type="submit">
          SEARCH
        </button>

        <RoomOption />

        <SizeOption />
      </form>
    </div>
  );
};

export default SearchArea;
