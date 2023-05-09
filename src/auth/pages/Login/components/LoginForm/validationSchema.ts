import * as Yup from "yup";

function validationSchema() {
  return Yup.object().shape({
    ipAddress: Yup.string().required(),
    login: Yup.string().required(),
    password: Yup.string().required(),
  });
}

export default validationSchema;
