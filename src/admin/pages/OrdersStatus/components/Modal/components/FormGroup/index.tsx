import { FormControl } from "@mui/material";
import styles from "../../index.module.scss";
import FormControlValidate from "../../../../../../../_components/Form/FormControlValidate";
import {
  DragDropFiles,
  TextareaControlValidate,
} from "../../../../../../../_components/Form";

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
      <div className={styles.formBottom}>
        <div className={styles.select}>
          <FormControl fullWidth className={styles.firstSelect}>
            <FormControlValidate
              label="Org"
              fieldName="org"
              controls={formControls}
            />
          </FormControl>
        </div>
        <div className={styles.select}>
          <FormControl fullWidth className={styles.firstSelect}>
            <FormControlValidate
              label="Creator"
              fieldName="creator"
              controls={formControls}
            />
          </FormControl>
        </div>
      </div>
      <TextareaControlValidate
        controls={formControls}
        className={styles.textarea}
        maxLength={1000}
        placeholder="Description"
        fieldName="description"
      />
      <DragDropFiles controls={formControls} fieldName="img" />
    </div>
  );
}

export default FormGroup;
