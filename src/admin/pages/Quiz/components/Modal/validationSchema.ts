import * as Yup from "yup";

function validationSchema() {
  return Yup.object().shape({
    name: Yup.string().required(),
    category: Yup.number().required(),
    status: Yup.number(),
    img: Yup.string(),
  });
}

export default validationSchema;
