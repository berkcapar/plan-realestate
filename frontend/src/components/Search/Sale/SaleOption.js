import { purchaseDropdownItems } from "../DropdownItems";
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

const SaleOption = () => {
  const classes = useStyles();

  return (
    <FormControl className={classes.form} variant="filled">
      <InputLabel>Choose Option</InputLabel>
      <Select name="option">
        {purchaseDropdownItems.map((option) => (
          <MenuItem value={option.purchaseoption}>
            {option.purchaseoption}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SaleOption;
