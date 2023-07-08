import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  FormGroup,
  MenuItem,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import styles from "../../index.module.scss";
import {
  FormControlValidate,
  RadioControlValidate,
  SelectControlValidate,
} from "../../../../../../../_components/Form";
import DatePickerControlValidate from "../../../../../../../_components/Form/DatePickerControlValidate";

function OfferCharacters({ formControls, handleChange, expanded }: any) {
  return (
    <Accordion
      expanded={expanded === "panel5"}
      onChange={handleChange("panel5")}
      className={styles.accordion}
    >
      <AccordionSummary
        className={styles.accordionHeader}
        expandIcon={<i className="fa-solid fa-angle-down" />}
      >
        <h2>Offer characters</h2>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.form}>
          <FormGroup>
            <h4>Частота процессора</h4>
            <FormControlValidate
              fieldName="ipAddress"
              type="text"
              placeholder="Coca cola 1.5 litre"
              controls={formControls}
            />
          </FormGroup>
          <div className={styles.row}>
            <FormGroup>
              <h4>Оперативная память</h4>
              <SelectControlValidate
                displayEmpty
                controls={formControls}
                fieldName="categoryOfCategory"
              >
                <MenuItem value={1}>1</MenuItem>
              </SelectControlValidate>
            </FormGroup>
          </div>
          <FormGroup>
            <h4>Товар предназначен для </h4>
            <RadioControlValidate
              controls={formControls}
              fieldName="categoryOfCategory"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Товар"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Услуга"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Абонимент"
              />
            </RadioControlValidate>
          </FormGroup>
          <FormGroup>
            <h4>Срок годности</h4>
            <DatePickerControlValidate controls={formControls} />
          </FormGroup>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default OfferCharacters;
