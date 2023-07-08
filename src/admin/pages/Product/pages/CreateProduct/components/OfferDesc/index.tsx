import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
} from "@mui/material";
import styles from "../../index.module.scss";
import {TextareaControlValidate} from "../../../../../../../_components/Form";

function OfferDesc({ handleChange, expanded, formControls }: any) {
  return (
    <Accordion
      expanded={expanded === "panel2"}
      onChange={handleChange("panel2")}
      className={styles.accordion}
    >
      <AccordionSummary
        className={styles.accordionHeader}
        expandIcon={<i className="fa-solid fa-angle-down" />}
      >
        <h2>Offer description</h2>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.form}>
          <FormGroup>
            <h4>Offer Description</h4>
            <TextareaControlValidate
              maxLength={1200}
              fieldName="description"
              controls={formControls}
              placeholder="ex. Tell your offer specs, material, how to used, etc..."
              className={styles.textarea}
            />
          </FormGroup>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default OfferDesc;
