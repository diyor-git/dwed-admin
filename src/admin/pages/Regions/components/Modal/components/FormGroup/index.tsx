import { FormControl, InputLabel, MenuItem } from "@mui/material";
import styles from "../../index.module.scss";
import FormControlValidate from "../../../../../../../_components/Form/FormControlValidate";
import SelectControlValidate from "../../../../../../../_components/Form/SelectControlValidate";

function FormGroup({ formControls, regionsType, regions }: any) {
  return (
    <div className={styles.inputs}>
      <div className={styles.select}>
        <FormControl fullWidth className={styles.firstSelect}>
          <FormControlValidate
            label="Category Name"
            fieldName="categoryName"
            controls={formControls}
          />
        </FormControl>
      </div>
      <div className={styles.formBottom}>
        <div className={styles.select}>
          <FormControl fullWidth>
            <InputLabel>Category Of Category</InputLabel>
            <SelectControlValidate
              controls={formControls}
              label="Category of category"
              fieldName="categoryOfCategory"
            >
              <MenuItem value={undefined}>None</MenuItem>
              {regions &&
                regions.results.map((el: any) => (
                  <MenuItem key={el.id} value={el.id}>
                    {el.name}
                  </MenuItem>
                ))}
            </SelectControlValidate>
          </FormControl>
        </div>
        <div className={styles.select}>
          <FormControl fullWidth>
            <InputLabel>Region type</InputLabel>
            <SelectControlValidate
              label="Region type"
              controls={formControls}
              fieldName="regionType"
            >
              {regionsType &&
                regionsType.results.map((el: any) => (
                  <MenuItem key={el.id} value={el.id}>
                    {el.name}
                  </MenuItem>
                ))}
            </SelectControlValidate>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default FormGroup;
