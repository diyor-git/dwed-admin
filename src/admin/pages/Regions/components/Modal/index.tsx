import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import styles from "./index.module.scss";
import {
  useCreateRegionMutation,
  useGetRegionsQuery,
  useGetRegionsTypeQuery,
} from "../../../../api/regions.ts";
import validationSchema from "./validationSchema.ts";
import { ModalFormGroup } from "./components";

const initialValues = {
  categoryName: "",
  categoryOfCategory: "",
  regionType: "",
};

function Modal({ open, handleClose, parentParam, offset }: any) {
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
    offset,
    search: "",
    parent: parentParam,
  });

  const [value, setValue] = useState(0);

  // @ts-ignore
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  if (isLoading && loading) return <div />;
  return (
    <Dialog
      className={styles.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} />
        <form onSubmit={handleSubmit}>
          <DialogTitle>Health & Care</DialogTitle>
          <DialogContent className={styles.content}>
            <div className={styles.languages}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Uzbek" {...a11yProps(0)} />
              </Tabs>
            </div>
            <CustomTabPanel value={value} index={0}>
              <div className={styles.form}>
                <h4>Category Information</h4>
                <ModalFormGroup
                  formControls={formControls}
                  regions={regions}
                  regionsType={regionsType}
                />
              </div>
              <DialogActions className={styles.btns}>
                {/* eslint-disable-next-line react/button-has-type */}
                <button type="reset" onClick={handleClose}>
                  Cancel
                </button>
                <button type="submit">Save</button>
              </DialogActions>
            </CustomTabPanel>
          </DialogContent>
        </form>
      </Box>
    </Dialog>
  );
}

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default Modal;
