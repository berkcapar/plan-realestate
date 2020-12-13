import React from "react";
import {minsizeDropdownItems,maxsizeDropdownItems} from './DropdownItems'

const SizeOption =  () => {
    return (
        <>
        <div className='size-dropdown-menu'>
        <select className="size-dropdown">{minsizeDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select>
        <select className="size-dropdown">{maxsizeDropdownItems.map((option)=><option value={option}>{option.option}</option>)}</select>
        </div>
        </>
    )
}

export default SizeOption
