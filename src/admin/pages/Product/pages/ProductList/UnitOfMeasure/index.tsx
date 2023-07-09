import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import styles from "../../../index.module.scss";
import {Modal, Table} from "../../../components";
import { Filter } from "../../../../../../_components";
import validationSchema from "../../../validationSchema.ts";
import { useGetProductsSubQuery } from "../../../../../api/products.ts";

function UnitOfMeasure() {
  const { id } = useParams();
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

  const { data, isLoading, refetch } = useGetProductsSubQuery({
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

  useEffect(() => {
    refetch();
  }, [id]);

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
        loading={loading}
        handleChangePage={handleChangePage}
        handleOpenFilter={handleOpenFilter}
      />
    </div>
  );
}

export default UnitOfMeasure;