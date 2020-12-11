import React, { useState } from "react";
import BudgetOption from "./BudgetOption";
import HomeOption from "./HomeOption";
import LocationDropdown from "./LocationDropdown";
import RoomOption from "./RoomOption";
import SaleOption from "./SaleOption";
import SizeOption from "./SizeOption";
import Toggleable from "./Toggleable";

const SearchArea = () => {

const [sidebar, setSidebar] = useState(false)

const showSideBar = () => setSidebar(!sidebar)

  return (
    <div className={sidebar ? 'searchformarea active' : "searchformarea"}>
      <h3 className="searchformareatitle">Find Your Cozy Place</h3>
      <form className="searchform">
        <div>
          <SaleOption />
        </div>
        <div>
          <LocationDropdown />
        </div>
        <div>
          <HomeOption />
        </div>
        <div>
          <BudgetOption />
        </div>
        <RoomOption />
        <SizeOption />
        <button className="searchbutton" type="submit">SEARCH </button>
      </form>
    </div>
  );
};

export default SearchArea;
