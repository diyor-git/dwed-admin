import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Modal } from "../../components";
import validationSchema from "../../validationSchema.ts";
import styles from "../../index.module.scss";
import { useGetRegionsFinalQuery } from "../../../../api/regions.ts";
import Table from "../../components/Table";

function FinalCategory() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  const { data, isLoading, refetch } = useGetRegionsFinalQuery({
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    <div className={styles.regions}>
      <Modal open={open} handleClose={handleClose} />
      <div className={styles.header}>
        <button type="button" onClick={handleClickOpen}>
          <AddIcon />
          Add category
        </button>
      </div>
      <Table
        formControls={formControls}
        rowsName={[
          "ROOM",
          "Name",
          "Participant",
          "Restart count",
          "Creator of  this Quiz",
        ]}
        handleSubmit={handleSubmit}
        rows={data}
        disableLinks
        loading={loading}
        handleChangePage={handleChangePage}
      />
    </div>
  );
}

export default FinalCategory;
