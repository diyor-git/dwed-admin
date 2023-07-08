import * as Yup from "yup";

function validationSchema() {
  return Yup.object().shape({
    categoryName: Yup.string().required(),
    categoryOfCategory: Yup.string(),
  });
}

export default validationSchema;
