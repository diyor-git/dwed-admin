import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import { useGetProductsMeasureQuery } from "../../../../api/products.ts";
import { Modal } from "./components";
import validationSchema from "../../../../components/SearchValidation";
import { Table } from "../../../../../_components";
import styles from "./index.module.scss";

function ProductMeasure() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");

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
  } = useGetProductsMeasureQuery({ offset: page, search: searchItem });

  // @ts-ignore
  const handleChangePage = async (event: any, newPage: any) => {
    setPage(newPage * 10 - 10);
    setLoading(true);
    await refetch();
    setLoading(false);
  };

  const onSubmit = ({ search }: any) => {
    setSearchItem(search);
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
    <div className={styles.measure}>
      <Modal open={open} handleClose={handleClose} />
      <div className={styles.header}>
        <button type="button" onClick={handleClickOpen}>
          <AddIcon />
          Add category
        </button>
      </div>
      <div className={styles.table}>
        <Table
          rowsName={["ID", "Name"]}
          formControls={formControls}
          disableLinks
          handleSubmit={handleSubmit}
          actions={false}
          rows={regions}
          loading={loading}
          handleChangePage={handleChangePage}
          handleOpenFilter={null}
        />
      </div>
    </div>
  );
}

export default ProductMeasure;
