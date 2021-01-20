import { minroomDropdownItems, maxroomDropdownItems } from "../DropdownItems";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  form: {
    backgroundColor: "white",
    width: "100%",
  },
});

const RoomOption = () => {
  const classes = useStyles();
  return (
    <Box display="flex" width="100%">
      <FormControl className={classes.form} variant="filled">
        <InputLabel>Min Room</InputLabel>
        <Select name="option">
          {minroomDropdownItems.map((option) => (
            <MenuItem value={option.minroomoption}>
              {option.minroomoption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.form} variant="filled">
        <InputLabel>Max Room</InputLabel>
        <Select name="option">
          {maxroomDropdownItems.map((option) => (
            <MenuItem value={option.maxroomoption}>
              {option.maxroomoption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default RoomOption;
