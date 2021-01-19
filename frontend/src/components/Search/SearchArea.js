import React, { useState } from "react";
import BudgetOption from "./Budget/BudgetOption";
import HomeOption from "./Home/HomeOption";
import LocationDropdown from "./Location/LocationDropdown";
import RoomDropdown from "./Room/RoomDropdown";
import SaleOption from "./Sale/SaleOption";
import SizeDropdown from "./Size/SizeDropdown";
import { useDispatch } from "react-redux";
import { searchProperty } from "../../redux/reducers/propertyReducer";
import { useHistory } from "react-router-dom";

const SearchArea = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchData = new FormData(event.target);

    try {
      dispatch(searchProperty(searchData));
      history.push("/searchresults");
    } catch (error) {}
  };

  return (
    <div className="searchformarea">
      <h3 className="searchformareatitle">Find Your Cozy Place</h3>
      <form onSubmit={handleSearch} className="searchform">
        <div className="searchform-first">
          <div className="searchform-sale-location-home">
            <div className="all-options">
              <SaleOption name="option" />
            </div>
            <div className="all-options">
              <LocationDropdown name="city" />
            </div>
            <div className="all-options">
              <HomeOption name="propertyType" />
            </div>
          </div>
          <div className="all-options">
            <BudgetOption name="price" />
          </div>
          <button className="searchbutton" type="submit">
            SEARCH{" "}
          </button>
        </div>
        <div className="searchform-second">
          <RoomDropdown name="roomnumber" />
          <SizeDropdown name="m2" />
        </div>
      </form>
    </div>
  );
};

export default SearchArea;
