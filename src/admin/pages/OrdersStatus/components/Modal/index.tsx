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
import { TextareaControlValidate } from "../../../../../_components/Form";
import { useCreateOrderStatusMutation } from "../../../../api/orderstatus.ts";

const initialValues = {
  name: "",
  description: "",
  creator: "",
  org: "",
};

function Modal({ open, handleClose }: any) {
  const [createOrderStatus] = useCreateOrderStatusMutation();
  const onSubmit = ({ name, description, creator, org }: any) => {
    createOrderStatus({ name, description, creator, org });
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
        <DialogTitle>Order status</DialogTitle>
        <DialogContent className={styles.content}>
          <div className={styles.languages}>
            <h4>Uzbek</h4>
            <h4>Russian</h4>
            <h4>Korean</h4>
          </div>
          <div className={styles.form}>
            <h4>Order name information</h4>
            <div className={styles.inputs}>
              <div className={styles.select}>
                <FormControl fullWidth className={styles.firstSelect}>
                  <FormControlValidate
                    hiddenLabel
                    label="Order name"
                    fieldName="name"
                    controls={formControls}
                  />
                </FormControl>
              </div>
              <div className={styles.formBottom}>
                <div className={styles.select}>
                  <FormControl fullWidth className={styles.firstSelect}>
                    <FormControlValidate
                      hiddenLabel
                      label="Creator"
                      fieldName="creator"
                      controls={formControls}
                    />
                  </FormControl>
                </div>
                <div className={styles.select}>
                  <FormControl fullWidth className={styles.firstSelect}>
                    <FormControlValidate
                      hiddenLabel
                      label="Organization"
                      fieldName="org"
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

export default Modal;
