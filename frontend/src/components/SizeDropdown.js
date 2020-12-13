import React, { useState } from "react";
import SizeOption from './SizeOption'

const SizeDropdown = () => {
  const [dropdown, setDropdown] = useState(false)
  const handleClick = () => setDropdown(!dropdown)
  return( 
  <div>
    <h3 onClick={handleClick} className="dropdown-second-text dropdown-size-text">Size<i className='fas fa-caret-down' /></h3>
    {dropdown && <SizeOption/>}
  </div>
  )
};

export default SizeDropdown;