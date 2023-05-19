import * as Yup from "yup";

function validationSchema() {
  return Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });
}

export default validationSchema;
