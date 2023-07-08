import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import styles from "../../index.module.scss";
import { useGetRegionsTypeQuery } from "../../../../api/regions.ts";
import validationSchema from "../../validationSchema.ts";
import { Table } from "../../../../../_components";
import { ModalV2 } from "../../components";

function QuizType() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(0);

  const {
    data: regions,
    isLoading,
    refetch,
  } = useGetRegionsTypeQuery({ offset: page });

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
      <ModalV2 open={open} handleClose={handleClose} />
      <div className={styles.header}>
        <button type="button" onClick={handleClickOpen}>
          <AddIcon />
          Add category
        </button>
      </div>
      <div className={styles.table}>
        <Table
          formControls={formControls}
          handleSubmit={handleSubmit}
          rows={regions}
          loading={loading}
          handleChangePage={handleChangePage}
        />
      </div>
    </div>
  );
}

export default QuizType;
