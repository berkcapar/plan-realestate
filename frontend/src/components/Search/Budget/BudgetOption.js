import { minpriceDropdownItems, maxpriceDropdownItems } from "../DropdownItems";
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
});

const BudgetOption = ({ name }) => {
  const classes = useStyles();
  return (
    <Box>
      <FormControl className={classes.form} variant="filled">
        <InputLabel>Minimum Budget</InputLabel>
        <Select name={name}>
          {minpriceDropdownItems.map((option) => (
            <MenuItem value={option.minpriceoption}>
              {option.minpriceoption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.form} variant="filled">
        <InputLabel>Maximum Budget</InputLabel>
        <Select name={name}>
          {maxpriceDropdownItems.map((option) => (
            <MenuItem value={option.maxpriceoption}>
              {option.maxpriceoption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BudgetOption;
