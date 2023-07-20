import * as Yup from "yup";

function validationSchema() {
  return Yup.object().shape({
    name: Yup.string().required(),
    image: Yup.string(),
    status: Yup.string(),
    parent: Yup.string(),
  });
}

export default validationSchema;
