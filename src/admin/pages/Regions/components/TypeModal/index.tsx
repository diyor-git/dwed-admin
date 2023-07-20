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
import { useCreateRegionsTypeMutation } from "../../../../api/regions.ts";
import validationSchema from "./validationSchema.ts";
import { ModalFormGroup } from "./components";
import styles from "./index.module.scss";
import { ErrorAlert } from "../../../../../_components";

const initialValues = {
  name: "",
};

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

function TypeModal({ open, handleClose }: any) {
  const [createRegionType, { error }] = useCreateRegionsTypeMutation();
  const onSubmit = ({ name }: any) => {
    createRegionType({
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

  const [value, setValue] = useState(0);

  // @ts-ignore
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {/* @ts-ignore */}
      <ErrorAlert error={error} />
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
                  <ModalFormGroup formControls={formControls} />
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
    </>
  );
}

export default TypeModal;
