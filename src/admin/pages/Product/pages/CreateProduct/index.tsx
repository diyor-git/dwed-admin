import { useFormik } from "formik";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  ImageUpload,
  MainInfo,
  OfferCharacters,
  OfferCode,
  OfferDesc,
  OfferManufactured,
  QuickAction,
} from "./components";
import styles from "./index.module.scss";
import { DragDropFiles } from "../../../../../_components/Form";
import validationSchema from "./validationSchema.ts";
import { useCreateProductMutation } from "../../../../api/products.ts";

const initialValuesLogin = {
  name: "",
  description: "",
  status: 1,
  manufacturer: "",
  type: "",
  category: "",
  bar_code: "",
  unit: "",
};

function CreateProduct() {
  const [create] = useCreateProductMutation();
  const onSubmit = (data: any) => {
    console.log(data);
    create(data);
  };

  const { handleSubmit, getFieldMeta, setFieldValue, setFieldTouched } =
    useFormik({
      initialValues: initialValuesLogin,
      onSubmit,
      validationSchema: validationSchema(),
    });
  const formControls = { getFieldMeta, setFieldValue, setFieldTouched };
  const [expanded, setExpanded] = useState<string | false>(false);

  // @ts-ignore
  const handleChange = (panel: string) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChangeBtn = (panel: string) => () => {
    setExpanded(panel);
  };
  return (
    <div className={styles.createProduct}>
      <div className={styles.header}>
        {/* @ts-ignore */}
        <button type="button" onClick={handleSubmit}>
          <AddIcon />
          Publish offer
        </button>
      </div>
      <div className={styles.content}>
        <div>
          <MainInfo
            handleChange={handleChange}
            expanded={expanded}
            formControls={formControls}
          />
          <OfferDesc
            formControls={formControls}
            handleChange={handleChange}
            expanded={expanded}
          />
          <OfferCode
            handleChange={handleChange}
            expanded={expanded}
            formControls={formControls}
          />
          <OfferManufactured
            handleChange={handleChange}
            expanded={expanded}
            formControls={formControls}
          />
          <OfferCharacters
            handleChange={handleChange}
            expanded={expanded}
            formControls={formControls}
          />
          <ImageUpload
            handleChange={handleChange}
            expanded={expanded}
            formControls={formControls}
          />
        </div>
        <div className={styles.quichAction}>
          <QuickAction expanded={expanded} handleChange={handleChangeBtn} />
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
