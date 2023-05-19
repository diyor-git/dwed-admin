import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import styles from "./index.module.scss";
import FormControlValidate from "../../../../../_components/Form/FormControlValidate";

function Modal({ open, handleClose }: any) {
  const handleChange = (event: any) => {
    console.log(event);
  };
  return (
    <Dialog
      className={styles.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
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
                <InputLabel>Category Name</InputLabel>
                <FormControlValidate
                  fieldName="password"
                  type="password"
                />
              </FormControl>
            </div>
            <div className={styles.formBottom}>
              <div className={styles.select}>
                <FormControl fullWidth>
                  <InputLabel>Category of category</InputLabel>
                  <Select label="Category of category" onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={styles.select}>
                <FormControl fullWidth>
                  <InputLabel>Region type</InputLabel>
                  <Select label="Region type" onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions className={styles.btns}>
        <button type="button" onClick={handleClose}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
