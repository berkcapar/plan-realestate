import React, { useState } from "react";

const Toggleable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideComponent = { display: visible ? "none" : " " };
  const showComponent = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div style={hideComponent}>
        <button className="toggle" onClick={toggleVisibility}>
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div style={showComponent}>
        {props.children}
        <button className="toggle" onClick={toggleVisibility}>
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Toggleable;
