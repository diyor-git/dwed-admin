import * as Yup from "yup";

function validationSchema() {
  return Yup.object().shape({
    login: Yup.string().required(),
    password: Yup.string().required(),
  });
}

export default validationSchema;
