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
    width: "50%",
  },
  maxform: {
    backgroundColor: "white",
    width: "50%",
    marginLeft: "0.5rem",
  },
});

const RoomOption = ({ name }) => {
  const classes = useStyles();
  return (
    <Box display="flex" width="200%">
      <FormControl className={classes.form} variant="filled">
        <InputLabel>Min Room</InputLabel>
        <Select name={name}>
          {minroomDropdownItems.map((option) => (
            <MenuItem value={option.minroomoption}>
              {option.minroomoption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.maxform} variant="filled">
        <InputLabel>Max Room</InputLabel>
        <Select name={name}>
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
