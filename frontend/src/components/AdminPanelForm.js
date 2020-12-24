import React from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../redux/reducers/notificationReducer";
import { addProperty } from "../redux/reducers/propertyReducer";
import {
  locationDropdownItems,
  purchaseDropdownItems,
  homeDropdownItems,
  maxroomDropdownItems,
  maxsizeDropdownItems
} from "./DropdownItems";

const AdminPanelForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const option = event.target.option.value;
    const propertyType = event.target.propertyType.value;
    const title = event.target.title.value;
    const city = event.target.city.value;
    const price = event.target.price.value;
    const m2 = event.target.m2.value;
    const roomnumber = event.target.roomnumber.value;

    try {
      dispatch(
        addProperty(option, propertyType, title, city, price, m2, roomnumber)
      );
      console.log(option)
    } catch (error) {
      dispatch(showNotification(`Ekleme Başarısız Oldu`));
    }
  };

  return (
    <div className="loginarea">
      <h2>Eklemek istediğiniz evin bilgilerini doldurun.</h2>
      <form className="loginform" onSubmit={handleSubmit}>
        <div className="emailpassword">
          <div className="emailtext">
            Option:
            <select name="option" className="sale-dropdown">
              {purchaseDropdownItems.map((option) => (
                <option value={option.purchaseoption}>{option.purchaseoption}</option>
              ))}
            </select>
          </div>
          <div className="passwordtext">
            Property Type:
            <select name="propertyType" className="property-drowdown">
              {homeDropdownItems.map((option) => (
                <option value={option.homeoption}>{option.homeoption}</option>
              ))}
            </select>
          </div>
          <div className="passwordtext">
            Title:
            <input className="passwordinput" name="title" />
          </div>
          <div className="passwordtext">
            City:
            <select name="city" className="location-dropdown">
              {locationDropdownItems.map((option) => (
                <option value={option.location}>
                  {option.location}
                </option>
              ))}
            </select>
          </div>
          <div className="passwordtext">
            Price:
            <input className="passwordinput" name="price" />
          </div>
          <div className="passwordtext">
            m2:
            <select name="m2" className="size-dropdown">{maxsizeDropdownItems.map((option)=><option value={option.maxsizeoption}>{option.maxsizeoption}</option>)}</select>
          </div>
          <div className="passwordtext">
            Room Number:
            <select name="roomnumber" className="room-dropdown room-dropdown-max">{maxroomDropdownItems.map((option)=><option value={option.maxroomoption}>{option.maxroomoption}</option>)}</select>
          </div>
        </div>
        <button className="loginbutton" type="submit">
         Ekle!
        </button>
      </form>
    </div>
  );
};

export default AdminPanelForm;
