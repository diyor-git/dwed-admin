import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Modal } from "../../components";
import { Breadcrumb, Table } from "../../../../../_components";
import validationSchema from "../../validationSchema.ts";
import styles from "../../index.module.scss";
import { useGetRegionsFinalQuery } from "../../../../api/regions.ts";

function FinalCategory() {
  const { name, subname, id } = useParams();
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
  if (isLoading) return <h1>load</h1>;

  return (
    <div className={styles.regions}>
      <Modal open={open} handleClose={handleClose} />
      <div className={styles.header}>
        <Breadcrumb
          text={[
            {
              to: "/admin/regions",
              text: "Region List",
            },
            {
              to: `/admin/regions/${id}`,
              text: name || "",
            },
            {
              to: "",
              text: subname || "",
            },
          ]}
        />
        <button type="button" onClick={handleClickOpen}>
          <AddIcon />
          Add category
        </button>
      </div>
      <Table
        formControls={formControls}
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