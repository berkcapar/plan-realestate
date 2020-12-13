import React, { useState } from "react";
import RoomOption from './RoomOption'

const RoomDropdown = () => {
  const [dropdown, setDropdown] = useState(false)
  const handleClick = () => setDropdown(!dropdown)
  return( 
  <div>
    <h3 onClick={handleClick} className="dropdown-second-text">Rooms<i className='size-room-fas fas fa-caret-down' /></h3>
    {dropdown && <RoomOption/>}
  </div>
  )
};

export default RoomDropdown;