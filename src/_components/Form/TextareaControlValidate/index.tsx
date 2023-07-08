import { forwardRef } from "react";

const TextareaControlValidate = forwardRef(
  (
    { fieldName, controls, className, maxLength, placeholder, ...props }: any,
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
      <textarea
        className={` ${className} ${
          errorTouched && error ? "invalidInput" : ""
        }`}
        maxLength
        ref={ref}
        placeholder={placeholder}
        value={value}
        name={fieldName}
        onChange={handleChangeTouched}
        {...props}
      />
    );
  }
);

export default TextareaControlValidate;
