import React from "react";

const SaleOption = () => {
  return (
    <form>
      <select name="saleoptions" id="saleoptions">
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
      </select>
    </form>
  );
};

export default SaleOption;
