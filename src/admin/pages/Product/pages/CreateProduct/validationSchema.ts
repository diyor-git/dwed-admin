import * as Yup from "yup";

function validationSchema() {
  return Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    status: Yup.number(),
    manufacturer: Yup.number().required(),
    type: Yup.number().required(),
    category: Yup.number().required(),
    bar_code: Yup.string().required(),
    unit: Yup.number().required(),
  });
}

export default validationSchema;
