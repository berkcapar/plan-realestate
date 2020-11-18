import React from "react";

const BudgetOption = () => {
  return (
    <form>
      <select name="budgetoptions" id="budgetoptions">
        <option value="buy"> 50.000£ </option>
        <option value="rent">100.000£</option>
        <option value="rent">150.000£</option>
        <option value="rent">200.000£</option>
      </select>
    </form>
  );
};

export default BudgetOption
