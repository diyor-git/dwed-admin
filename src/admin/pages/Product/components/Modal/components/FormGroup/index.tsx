import { FormControl, InputLabel, MenuItem } from "@mui/material";
import styles from "../../index.module.scss";
import FormControlValidate from "../../../../../../../_components/Form/FormControlValidate";
import SelectControlValidate from "../../../../../../../_components/Form/SelectControlValidate";
import {DragDropFiles} from "../../../../../../../_components/Form";

function FormGroup({ formControls, products }: any) {
  return (
    <div className={styles.inputs}>
      <div className={styles.select}>
        <FormControl fullWidth className={styles.firstSelect}>
          <FormControlValidate
            label="Category Name"
            fieldName="name"
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
              fieldName="parent"
            >
              <MenuItem value={undefined}>None</MenuItem>
              {products &&
                products.results.map((el: any) => (
                  <MenuItem key={el.id} value={el.id}>
                    {el.name}
                  </MenuItem>
                ))}
            </SelectControlValidate>
          </FormControl>
        </div>
        <div className={styles.select}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <SelectControlValidate
              controls={formControls}
              label="Status"
              fieldName="status"
            >
              <MenuItem value={0}>Active</MenuItem>
              <MenuItem value={1}>Disabled</MenuItem>
            </SelectControlValidate>
          </FormControl>
        </div>
      </div>
      <DragDropFiles controls={formControls} fieldName="image" />
    </div>
  );
}

export default FormGroup;
