import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import { Modal } from "./components";
import validationSchema from "./validationSchema";
import { useGetQuizQuery } from "../../api/quiz.ts";
import styles from "./index.module.scss";
import Table from "./components/Table";

function Quiz() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(0);

  const { data: quiz, isLoading, refetch } = useGetQuizQuery({ offset: page });

  // @ts-ignore
  const handleChangePage = async (event: any, newPage: any) => {
    setPage(newPage * 10 - 10);
    setLoading(true);
    await refetch();
    setLoading(false);
  };

  const onSubmit = ({ search }: any) => {
    console.log(search);
  };

  const { handleSubmit, getFieldMeta, setFieldValue, setFieldTouched } =
    useFormik({
      initialValues: { search: "" },
      onSubmit,
      validationSchema: validationSchema(),
    });

  const formControls = { getFieldMeta, setFieldValue, setFieldTouched };

  if (isLoading) return <div />;
  return (
    <div className={styles.quiz}>
      <Modal open={open} handleClose={handleClose} />
      <div className={styles.header}>
        <button type="button" onClick={handleClickOpen}>
          <AddIcon />
          Add category
        </button>
      </div>
      <div className={styles.table}>
        <Table
          rowsName={[
            "ID",
            "Category name",
            "Subcategory",
            "Status",
            "Who added",
            "Action",
          ]}
          formControls={formControls}
          handleSubmit={handleSubmit}
          rows={quiz}
          loading={loading}
          handleChangePage={handleChangePage}
        />
      </div>
    </div>
  );
}

export default Quiz;
