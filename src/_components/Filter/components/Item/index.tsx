import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";

function Item({ color, label }: any) {
  return (
    <ListItem disableGutters>
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color,
              borderRadius: "50%",
              "&.Mui-checked": {
                color,
              },
            }}
          />
        }
        label={label}
        sx={{
          color,
        }}
      />
    </ListItem>
  );
}

export default Item;
