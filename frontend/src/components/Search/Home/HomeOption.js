import { homeDropdownItems } from "../DropdownItems";
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

const HomeOption = ({ name }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.form} variant="filled">
      <InputLabel>Choose Property</InputLabel>
      <Select name={name}>
        {homeDropdownItems.map((option) => (
          <MenuItem value={option.homeoption}>{option.homeoptionname}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default HomeOption;
