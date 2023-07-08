import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
  MenuItem,
} from "@mui/material";
import styles from "../../index.module.scss";
import { SelectControlValidate } from "../../../../../../../_components/Form";
import { useGetProductsManufactureQuery } from "../../../../../../api/products.ts";

function OfferManufactured({ formControls, handleChange, expanded }: any) {
  const { data: manufacture } = useGetProductsManufactureQuery("");
  return (
    <Accordion
      expanded={expanded === "panel4"}
      onChange={handleChange("panel4")}
      className={styles.accordion}
    >
      <AccordionSummary
        className={styles.accordionHeader}
        expandIcon={<i className="fa-solid fa-angle-down" />}
      >
        <h2>Offer Manufactured</h2>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.form}>
          <FormGroup>
            <h4>Manufactured</h4>
            <SelectControlValidate
              displayEmpty
              controls={formControls}
              fieldName="manufacturer"
            >
              {manufacture &&
                manufacture.results.map(({ id, name }: any) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
            </SelectControlValidate>
          </FormGroup>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default OfferManufactured;
