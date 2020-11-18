import React from "react";

const SizeOption = () => {
  return (
    <div className="min-max-size-options"> 
    <div> 
    <p>Min Size</p>
      <select id="roomoptions" name="roomoptions">
       
        <option value="one">1</option>
        <option value="two">2</option>
        <option value="three">3</option>
        <option value="four">4</option>
        <option value="five">5</option>
        <option value="six">6</option>
        <option value="eight">8</option>
        <option value="nine">9</option>
        <option value="rent">10</option>
       
      </select>
      </div>
          <div className="max-size-options"> 
          <p>Max Size</p>
            <select id="roomoptions" name="roomoptions">
             
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
              <option value="five">5</option>
              <option value="six">6</option>
              <option value="eight">8</option>
              <option value="nine">9</option>
              <option value="rent">10</option>
             
            </select>
            </div>
            </div>
    
  );
};

export default SizeOption;