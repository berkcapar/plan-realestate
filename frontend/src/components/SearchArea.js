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
        <SaleOption />
        <LocationOption />
        <HomeOption />
        <BudgetOption />
        <button className="searchbutton" type="submit">SEARCH</button>
        
        <RoomOption/>
        <Toggleable buttonLabel = "Min Size">
        <SizeOption/>
        </Toggleable>
      </form>

    </div>
  );
};

export default SearchArea;
