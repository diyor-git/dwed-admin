import { forwardRef } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const RadioControlValidate = forwardRef(
  ({ fieldName, children, controls, ...props }: any, ref) => {
    const { setFieldValue, setFieldTouched, getFieldMeta } = controls;
    const { value } = getFieldMeta(fieldName);
    const handleChangeTouched = async ({ target }: any) => {
      const { name, value: targetValue } = target;
      await setFieldValue(name, targetValue);
      setFieldTouched(name);
    };

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          sx={{ width: "max-content" }}
          name={fieldName}
          nChange={handleChangeTouched}
          ref={ref}
          {...props}
        />
      </LocalizationProvider>
    );
  }
);

export default RadioControlValidate;
