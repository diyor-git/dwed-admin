import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import styles from "../../index.module.scss";
import { Modal } from "../../components";
import { Breadcrumb, Table } from "../../../../../_components";
import { useGetRegionsSubQuery } from "../../../../api/regions.ts";
import validationSchema from "../../validationSchema.ts";

function Subcategory() {
  const { id, name } = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(0);

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
        loading={loading}
        handleChangePage={handleChangePage}
      />
    </div>
  );
}

export default Subcategory;
