import { FormControl, InputLabel, MenuItem } from "@mui/material";
import styles from "../../index.module.scss";
import FormControlValidate from "../../../../../../../_components/Form/FormControlValidate";
import SelectControlValidate from "../../../../../../../_components/Form/SelectControlValidate";
import {DragDropFiles} from "../../../../../../../_components/Form";

function FormGroup({ formControls, quizType }: any) {
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
            <InputLabel>Category</InputLabel>
            <SelectControlValidate
              label="Category"
              controls={formControls}
              fieldName="category"
            >
              {quizType &&
                quizType.results.map((el: any) => (
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
              label="Status"
              controls={formControls}
              fieldName="status"
            >
              <MenuItem value={1}>Active</MenuItem>
              <MenuItem value={0}>Disable</MenuItem>
            </SelectControlValidate>
          </FormControl>
        </div>
      </div>
      <DragDropFiles controls={formControls} />
    </div>
  );
}

export default FormGroup;
