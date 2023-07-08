import { forwardRef } from "react";
import { RadioGroup } from "@mui/material";

const RadioControlValidate = forwardRef(
  ({ fieldName, children, controls, ...props }: any, ref) => {
    const { setFieldValue, setFieldTouched, getFieldMeta } = controls;
    const { error, touched, value } = getFieldMeta(fieldName);
    const errorTouched = !!error && touched;

    const handleChangeTouched = async ({ target }: any) => {
      const { name, value: targetValue } = target;
      await setFieldValue(name, targetValue);
      setFieldTouched(name);
    };

    return (
      <RadioGroup
        row
        className={errorTouched && error ? "invalidInput" : ""}
        value={value}
        name={fieldName}
        onChange={handleChangeTouched}
        ref={ref}
        {...props}
      >
        {children}
      </RadioGroup>
    );
  }
);

export default RadioControlValidate;
