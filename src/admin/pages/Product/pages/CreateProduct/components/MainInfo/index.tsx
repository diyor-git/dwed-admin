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
import {
  useGetProductsCategoryQuery,
  useGetProductsMeasureQuery,
  useGetProductsTypeQuery,
} from "../../../../../../api/products.ts";

function MainInfo({ formControls, handleChange, expanded }: any) {
  const { data: category } = useGetProductsCategoryQuery("");
  const { data: measure } = useGetProductsMeasureQuery({ limit: 100 });
  const { data: type } = useGetProductsTypeQuery("");
  console.log(type);
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      className={styles.accordion}
    >
      <AccordionSummary
        className={styles.accordionHeader}
        expandIcon={<i className="fa-solid fa-angle-down" />}
      >
        <h2>Product create</h2>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.form}>
          <FormGroup>
            <h4>Offer Name</h4>
            <FormControlValidate
              fieldName="name"
              type="text"
              placeholder="Coca cola 1.5 litre"
              controls={formControls}
            />
          </FormGroup>
          <div className={styles.row}>
            <FormGroup>
              <h4>Offer Category</h4>
              <SelectControlValidate
                displayEmpty
                controls={formControls}
                fieldName="category"
              >
                {category &&
                  category.results.map(({ id, name }: any) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
              </SelectControlValidate>
            </FormGroup>
            <FormGroup>
              <h4>Offer ID</h4>
              <FormControlValidate
                fieldName="offerId"
                type="text"
                placeholder="OFF123424565"
                controls={formControls}
              />
            </FormGroup>
            <FormGroup>
              <h4>Unit of measure</h4>
              <SelectControlValidate controls={formControls} fieldName="unit">
                {measure &&
                  measure.results.map(({ id, name }: any) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
              </SelectControlValidate>
            </FormGroup>
            <FormGroup>
              <h4>Color</h4>
              <SelectControlValidate
                displayEmpty
                controls={formControls}
                fieldName="categoryOfCategory"
              >
                <MenuItem value={1}>1</MenuItem>
              </SelectControlValidate>
            </FormGroup>
            <FormGroup>
              <h4>Product type</h4>
              <RadioControlValidate controls={formControls} fieldName="type">
                {type &&
                  type.results.map(({ name, id }: any) => (
                    <FormControlLabel
                      key={id}
                      value={id}
                      control={<Radio />}
                      label={name}
                    />
                  ))}
              </RadioControlValidate>
            </FormGroup>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default MainInfo;
