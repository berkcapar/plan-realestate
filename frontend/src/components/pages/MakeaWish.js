import React from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/reducers/notificationReducer";
import { addProperty } from "../../redux/reducers/propertyReducer";
import {
  locationDropdownItems,
  purchaseDropdownItems,
  homeDropdownItems,
  maxroomDropdownItems,
  maxsizeDropdownItems,
} from "../Search/DropdownItems";
import { Link, useHistory } from "react-router-dom";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const MakeaWish = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      dispatch(addProperty(formData));
      history.push("/adminpanel-allproperties");
    } catch (error) {
      dispatch(showNotification(`Ekleme Başarısız Oldu`));
    }
  };

  return (
    <Box mx="auto" pt="8%" width="50%" display="flex" flexDirection="column">
      <h2>Let's find your dream house for you</h2>
      <p>Make a wish from us and we will search and find your dream house </p>
      <form enctype="multipart/form-data" onSubmit={handleSubmit}>
        <Box mx="auto" width="100%" display="flex" flexDirection="column">
          <FormControl>
            <InputLabel>Choose Option</InputLabel>
            <Select name="option">
              {purchaseDropdownItems.map((option) => (
                <MenuItem value={option.purchaseoption}>
                  {option.purchaseoption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Property Type</InputLabel>
            <Select name="propertyType">
              {homeDropdownItems.map((option) => (
                <MenuItem key={option.id} value={option.homeoption}>
                  {option.homeoption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Pick Locations</InputLabel>
            <Select name="city">
              {locationDropdownItems.map((option) => (
                <MenuItem key={option.id} value={option.location}>
                  {option.location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Minimum Price </InputLabel>
            <Select name="price">
              {maxroomDropdownItems.map((option) => (
                <MenuItem key={option.id} value={option.maxroomoption}>
                  {option.maxroomoption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Maximum Price </InputLabel>
            <Select name="price">
              {maxroomDropdownItems.map((option) => (
                <MenuItem key={option.id} value={option.maxroomoption}>
                  {option.maxroomoption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            name="title"
            label="Add your notes, musts, wishes, anything we should know"
          />

          <Button
            style={{ width: "30%", margin: "1rem auto" }}
            type="submit"
            variant="outlined"
          >
            Find for me!
          </Button>
        </Box>
      </form>
      <Link style={{ textDecoration: "none" }} to="/showallproperties">
        <h3>See All Properties </h3>
      </Link>
    </Box>
  );
};

export default MakeaWish;
