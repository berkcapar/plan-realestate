import React from "react"
import {roomDropdownItems} from './DropdownItems'


const RoomOption = () => {
  return (
    <div className="room-option"> 
    <h3 className="dropdown-second-text">Rooms</h3>
    <select className="room-dropdown">{roomDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select> 
    <select className="room-dropdown">{roomDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select>
    </div>
  )
}
export default RoomOption