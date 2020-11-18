import React from "react";

const HomeOption = () => {
  return (
    <form>
      <select name="homeoptions" id="homeoptions">
        <option value="buy">Villa</option>
        <option value="rent">Apartman</option>
      </select>
    </form>
  );
};

export default HomeOption;
