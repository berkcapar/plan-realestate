import React from "react"
import {minroomDropdownItems,maxroomDropdownItems} from './DropdownItems'


const RoomOption = () => {
  return (
    <div className="room-dropdown-menu"> 
    <select className="room-dropdown">{minroomDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select> 
    <select className="room-dropdown room-dropdown-max">{maxroomDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select>
    </div>
  )
}
export default RoomOption