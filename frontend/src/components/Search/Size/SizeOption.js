import { minsizeDropdownItems, maxsizeDropdownItems } from "../DropdownItems";
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

const SizeOption = ({ name }) => {
  const classes = useStyles();
  return (
    <Box marginLeft="10rem" display="flex" width="150%">
      <FormControl className={classes.form} variant="filled">
        <InputLabel>Min Size</InputLabel>
        <Select name={name}>
          {minsizeDropdownItems.map((option) => (
            <MenuItem value={option.minsizeoptionoption}>
              {" "}
              {option.minsizeoptionoption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.maxform} variant="filled">
        <InputLabel>Max Size</InputLabel>
        <Select name="option">
          {maxsizeDropdownItems.map((option) => (
            <MenuItem value={option.maxsizeoption}>
              {" "}
              {option.maxsizeoption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SizeOption;
