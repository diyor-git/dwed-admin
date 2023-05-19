import { forwardRef } from "react";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";

const FormControlValidate = forwardRef(
  (
    {
      fieldName,
      type,
      children,
      controls,
      addon,
      className,
      variant,
      isOnlyNumber,
      ...props
    }: any,
    ref
  ) => {
    const { setFieldValue, setFieldTouched, getFieldMeta } = controls;
    const { error, touched, value } = getFieldMeta(fieldName);
    const errorTouched = !!error && touched;

    const handleChangeTouched = async ({ target }: any) => {
      const { name, value: targetValue } = target;
      const onlyNumber = target.value.replace(/\D/g, "");
      await setFieldValue(name, isOnlyNumber ? onlyNumber : targetValue);
      setFieldTouched(name);
    };

    return (
      <FormControl>
        <TextField
          className={errorTouched && error ? "invalidInput" : ""}
          variant={variant || "outlined"}
          ref={ref}
          value={value}
          name={fieldName}
          type={type || "text"}
          onChange={handleChangeTouched}
          {...props}
        >
          {children}
        </TextField>
        {addon}
      </FormControl>
    );
  }
);

export default FormControlValidate;
