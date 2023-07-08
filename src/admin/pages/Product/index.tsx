import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import Table from "../../../_components/Table";
import { Modal } from "./components";
import { Filter } from "../../../_components";
import validationSchema from "./validationSchema.ts";
import styles from "./index.module.scss";
import { useGetProductsQuery } from "../../api/products.ts";

function Products() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const [, setFilterValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    data: products,
    isLoading,
    refetch,
  } = useGetProductsQuery({ offset: page, search: searchItem });

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
    <div className={styles.products}>
      <div>
        <Modal open={open} handleClose={handleClose} />
        <Filter
          open={openFilter}
          selectedValue={setFilterValue}
          onClose={handleCloseFilter}
        />
      </div>
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
          rows={products}
          loading={loading}
          handleOpenFilter={handleOpenFilter}
          handleChangePage={handleChangePage}
        />
      </div>
    </div>
  );
}

export default Products;
