import { FormControl } from "@mui/material";
import styles from "../../index.module.scss";
import FormControlValidate from "../../../../../../../_components/Form/FormControlValidate";

function FormGroup({ formControls }: any) {
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
    </div>
  );
}

export default FormGroup;
