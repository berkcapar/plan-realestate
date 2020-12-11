import React from "react"
import {roomDropdownItems} from './DropdownItems'


const RoomOption = () => {
  return (
    <div> 
    <h3>Rooms</h3>
    <select className="room-dropdown">{roomDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select> 
    <select className="room-dropdown">{roomDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select>
    </div>
  )
}
export default RoomOption