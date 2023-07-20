import * as Yup from "yup";

function validationSchema() {
  return Yup.object().shape({
    name: Yup.string().required(),
  });
}

export default validationSchema;
