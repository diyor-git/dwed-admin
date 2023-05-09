import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import validationSchema from "./validationSchema.ts";
import FormControlValidate from "../../../../../_components/Form/FormControlValidate";
import styles from "./index.module.scss";

const initialValuesLogin = {
  ipAddress: "",
  password: "",
  login: "",
};

function SignUpForm({ onSubmit, isSuccess, isLoading }: any) {
  const { t } = useTranslation();

  const {
    handleSubmit,
    getFieldMeta,
    setFieldValue,
    setFieldTouched,
    resetForm,
  } = useFormik({
    initialValues: initialValuesLogin,
    onSubmit,
    validationSchema: validationSchema(),
  });

  const formControls = { getFieldMeta, setFieldValue, setFieldTouched };

  useEffect(() => {
    resetForm({});
  }, [isSuccess]);

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit}>
      <FormGroup>
        <FormControlValidate
          fieldName="ipAddress"
          type="text"
          controls={formControls}
          label={t("auth.ipAddressField")}
        />
      </FormGroup>
      <FormGroup>
        <FormControlValidate
          fieldName="login"
          type="text"
          controls={formControls}
          label={t("auth.loginField")}
        />
      </FormGroup>
      <FormGroup>
        <FormControlValidate
          fieldName="password"
          type="password"
          controls={formControls}
          label={t("auth.passwordField")}
        />
      </FormGroup>
      <div className={styles.text}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label={t("auth.remember")} />
        </FormGroup>
        <h4>{t("auth.forgetPassword")}</h4>
      </div>
      <button type="submit" disabled={isLoading} className={styles.btn}>
        {t("auth.login")}
      </button>
      <h4 className={styles.sentReq}>
        {t("auth.dontHaveWork")} <span>{t("auth.sendRequest")}</span>
      </h4>
    </form>
  );
}

export default SignUpForm;
