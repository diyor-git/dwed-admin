import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import validationSchema from "../../validationSchema.ts";
import { Filter } from "../../../../../_components";
import { TableV2 } from "../../components";
import styles from "../../index.module.scss";
import { useGetProductsMeasureQuery } from "../../../../api/products.ts";
import {Modal} from "./components";

function ProductMeasure() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
      <div className={styles.table}>
        <TableV2
          formControls={formControls}
          disableLinks
          handleSubmit={handleSubmit}
          rows={regions}
          loading={loading}
          handleChangePage={handleChangePage}
          handleOpenFilter={handleOpenFilter}
        />
      </div>
    </div>
  );
}

export default ProductMeasure;
