import * as Yup from "yup";

function validationSchema() {
  return Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    creator: Yup.string().required(),
    org: Yup.string().required(),
  });
}

export default validationSchema;
