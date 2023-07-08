import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import styles from "./index.module.scss";
import FormControlValidate from "../../../../../_components/Form/FormControlValidate";
import {
  useCreateRegionMutation,
  useGetRegionsQuery,
  useGetRegionsTypeQuery,
} from "../../../../api/regions.ts";
import SelectControlValidate from "../../../../../_components/Form/SelectControlValidate";
import validationSchema from "./validationSchema.ts";

const initialValues = {
  categoryName: "",
  categoryOfCategory: "",
  regionType: "",
};

function Modal({ open, handleClose }: any) {
  const [createRegion] = useCreateRegionMutation();
  const onSubmit = ({ categoryName, categoryOfCategory, regionType }: any) => {
    createRegion({
      name: categoryName,
      parent: categoryOfCategory,
      type: regionType,
      status: 0,
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
  const { data: regionsType, isLoading } = useGetRegionsTypeQuery({
    offset: 0,
    search: "",
  });
  const { data: regions, isLoading: loading } = useGetRegionsQuery({
    offset: 0,
    search: "",
  });
  if (isLoading && loading) return <div />;
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
