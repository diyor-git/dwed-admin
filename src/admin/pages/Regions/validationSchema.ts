import * as Yup from "yup";

function validationSchema() {
  return Yup.object().shape({
    search: Yup.string(),
  });
}

export default validationSchema;
