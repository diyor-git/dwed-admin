import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
} from "@mui/material";
import styles from "../../index.module.scss";
import { DragDropFiles } from "../../../../../../../_components/Form";

function MainInfo({ formControls, handleChange, expanded }: any) {
  return (
    <Accordion
      expanded={expanded === "panel6"}
      onChange={handleChange("panel6")}
      className={styles.accordion}
    >
      <AccordionSummary
        className={styles.accordionHeader}
        expandIcon={<i className="fa-solid fa-angle-down" />}
      >
        <h2>Offer Media</h2>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.form}>
          <FormGroup>
            <h4>Offer Thumbnails</h4>
            <DragDropFiles controls={formControls} fieldName="image" />
          </FormGroup>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default MainInfo;
