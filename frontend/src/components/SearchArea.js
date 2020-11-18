import React from "react";
import BudgetOption from "./BudgetOption";
import HomeOption from "./HomeOption";
import LocationOption from "./LocationOption";
import RoomOption from "./RoomOption";
import SaleOption from "./SaleOption";
import SizeOption from "./SizeOption";

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
        <SizeOption/>
      </form>
      <style jsx>{`
        body {
          background-image: url("/images/heroimage.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          background-attachment: fixed;
        }
      `}</style>
    </div>
  );
};

export default SearchArea;
