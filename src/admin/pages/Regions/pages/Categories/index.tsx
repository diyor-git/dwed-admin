import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import { useSearchParams } from "react-router-dom";
import styles from "./index.module.scss";
import {
  useDeleteRegionMutation,
  useGetRegionsQuery,
} from "../../../../api/regions.ts";
import { Modal } from "../../components";
import { Filter, Table } from "../../../../../_components";
import validationSchema from "../../../../components/SearchValidation";

function Regions() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [, setFilterValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

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

  const parentParam = searchParams.get("parent") || 0;
  const {
    data: regions,
    isLoading,
    refetch,
  } = useGetRegionsQuery({
    offset: searchParams.get("offset") || 0,
    search: searchItem,
    parent: parentParam,
  });

  // @ts-ignore
  const handleChangePage = async (event: any, newPage: any) => {
    // @ts-ignore
    setSearchParams({ offset: newPage * 10 - 10 });
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

  const [deleteRegion, { error }] = useDeleteRegionMutation();
  if (isLoading) return <div />;
  return (
    <div className={styles.regions}>
      <div>
        <Modal
          open={open}
          handleClose={handleClose}
          parentParam={parentParam}
          offset={searchParams.get("offset")}
        />
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
          rows={regions}
          loading={loading}
          handleOpenFilter={handleOpenFilter}
          handleChangePage={handleChangePage}
          deleteMutation={deleteRegion}
          error={error}
        />
      </div>
    </div>
  );
}

export default Regions;
