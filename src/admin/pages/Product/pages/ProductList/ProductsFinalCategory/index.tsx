import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Modal } from "../../../components";
import { Filter, Table } from "../../../../../../_components";
import validationSchema from "../../../validationSchema.ts";
import { useGetProductsFinalQuery } from "../../../../../api/products.ts";
import styles from "../../../index.module.scss";

function ProductFinalCategory() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
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
  const { data, isLoading, refetch } = useGetProductsFinalQuery({
    offset: page,
    id,
    search: searchItem,
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
    <div className={styles.regions}>
      <Modal open={open} handleClose={handleClose} />
      <Filter
        open={openFilter}
        selectedValue={setFilterValue}
        onClose={handleCloseFilter}
      />
      <div className={styles.header}>
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
        handleOpenFilter={handleOpenFilter}
      />
    </div>
  );
}

export default ProductFinalCategory;
