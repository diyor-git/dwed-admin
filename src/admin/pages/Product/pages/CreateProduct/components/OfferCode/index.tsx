import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
} from "@mui/material";
import styles from "../../index.module.scss";
import { FormControlValidate } from "../../../../../../../_components/Form";
import { useGetRegionsQuery } from "../../../../../../api/regions.ts";

function OfferCode({ formControls, handleChange, expanded }: any) {
  const { data } = useGetRegionsQuery({
    offset: 0,
    search: "",
  });
  return (
    <Accordion
      expanded={expanded === "panel3"}
      onChange={handleChange("panel3")}
      className={styles.accordion}
    >
      <AccordionSummary
        className={styles.accordionHeader}
        expandIcon={<i className="fa-solid fa-angle-down" />}
      >
        <h2>Offer Code</h2>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.form}>
          {data &&
            data.results.map((region: any) => (
              <FormGroup key={region.id}>
                <h4>{region.name}</h4>
                <FormControlValidate
                  fieldName="bar_code"
                  type="text"
                  placeholder="1341534534534534543"
                  controls={formControls}
                />
              </FormGroup>
            ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default OfferCode;
