import { forwardRef } from "react";
import { Select } from "@mui/material";

const SelectControlValidate = forwardRef(
  (
    {
      fieldName,
      type,
      children,
      controls,
      addon,
      label,
      variant,
      ...props
    }: any,
    ref
  ) => {
    const { setFieldValue, setFieldTouched, getFieldMeta } = controls;
    const { error, touched, value } = getFieldMeta(fieldName);
    const errorTouched = !!error && touched;

    const handleChangeTouched = async ({ target }: any) => {
      const { name, value: targetValue } = target;
      await setFieldValue(name, targetValue);
      setFieldTouched(name);
    };

    return (
      <Select
        className={errorTouched && error ? "invalidInput" : ""}
        ref={ref}
        value={value}
        name={fieldName}
        label={label || ""}
        onChange={handleChangeTouched}
        defaultValue="None"
        {...props}
      >
        {children}
      </Select>
    );
  }
);

export default SelectControlValidate;
