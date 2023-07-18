import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Modal } from "../../components";
import { useGetRegionsSubQuery } from "../../../../api/regions";
import validationSchema from "../../validationSchema";
import styles from "../../index.module.scss";
import Table from "../../components/Table";

function QuizSubcategory() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const { data, isLoading, refetch } = useGetRegionsSubQuery({
    offset: page,
    id,
  });

  // @ts-ignore
  const handleChangePage = async (event: any, newPage: any) => {
    setPage(newPage * 10 - 10);
    setLoading(true);
    await refetch();
    setLoading(false);
  };

  useEffect(() => {
    refetch();
  }, [id]);

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
      <Table
        rowsName={["ID", "Name", "Subcategory", "Restart count", "Who added"]}
        formControls={formControls}
        handleSubmit={handleSubmit}
        rows={data}
        loading={loading}
        handleChangePage={handleChangePage}
      />
    </div>
  );
}

export default QuizSubcategory;
