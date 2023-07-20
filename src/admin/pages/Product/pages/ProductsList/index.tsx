import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import { useSearchParams } from "react-router-dom";
import { Modal } from "../../components";
import { Filter, Table } from "../../../../../_components";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../../api/products.ts";
import validationSchema from "../CreateProduct/validationSchema.ts";
import styles from "./index.module.scss";

function ProductsList() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  const [, setFilterValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [searchParams] = useSearchParams();

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
  } = useGetProductsQuery({
    offset: page,
    search: searchItem,
    parent: searchParams.get("parent") || 0,
  });

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

  const [deleteProduct, { error }] = useDeleteProductMutation();
  if (isLoading) return <div />;
  return (
    <div className={styles.regions}>
      <div>
        <Modal open={open} handleClose={handleClose} products={products}/>
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
          rowsName={["ID", "Category name", "Subcategory", "Status", ""]}
          formControls={formControls}
          handleSubmit={handleSubmit}
          rows={products}
          loading={loading}
          handleOpenFilter={handleOpenFilter}
          handleChangePage={handleChangePage}
          deleteMutation={deleteProduct}
          error={error}
        />
      </div>
    </div>
  );
}

export default ProductsList;
