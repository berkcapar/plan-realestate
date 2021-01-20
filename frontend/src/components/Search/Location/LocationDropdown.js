import { locationDropdownItems } from "../DropdownItems";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    backgroundColor: "white",
    width: "100%",
  },
});

const LocationDropdown = () => {
  const classes = useStyles();
  return (
    <FormControl className={classes.form} variant="filled">
      <InputLabel>Pick a Location</InputLabel>
      <Select name="option">
        {locationDropdownItems.map((option) => (
          <MenuItem value={option.location}>{option.location}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LocationDropdown;
