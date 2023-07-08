import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
import styles from "./index.module.scss";
import FormControlValidate from "../../../../../_components/Form/FormControlValidate";
import validationSchema from "./validationSchema.ts";
import { useCreateQuizTypeMutation } from "../../../../api/quiz.ts";

const initialValues = {
  name: "",
};

function ModalV2({ open, handleClose }: any) {
  const [createQuizType] = useCreateQuizTypeMutation();
  const onSubmit = ({ name }: any) => {
    createQuizType({
      name,
      status: 1,
    });
    handleClose();
  };
  const { handleSubmit, getFieldMeta, setFieldValue, setFieldTouched } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema: validationSchema(),
    });

  const formControls = { getFieldMeta, setFieldValue, setFieldTouched };
  return (
    <Dialog
      className={styles.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle>Health & Care</DialogTitle>
        <DialogContent className={styles.content}>
          <div className={styles.languages}>
            <h4>Uzbek</h4>
            <h4>Russian</h4>
            <h4>Korean</h4>
          </div>
          <div className={styles.form}>
            <h4>Category Information</h4>
            <div className={styles.inputs}>
              <div className={styles.select}>
                <FormControl fullWidth className={styles.firstSelect}>
                  <FormControlValidate
                    label="Name"
                    fieldName="name"
                    controls={formControls}
                  />
                </FormControl>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className={styles.btns}>
          {/* eslint-disable-next-line react/button-has-type */}
          <button type="reset" onClick={handleClose}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default ModalV2;
